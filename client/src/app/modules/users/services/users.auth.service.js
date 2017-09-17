export default class AuthService {
  constructor($http, $q, identityService, apiUrl) {
    this.$http = $http;
    this.$q = $q;
    this.identityService = identityService;
    this.apiUrl = apiUrl;
  }

  register(user) {
    const registerEnpoint = `${this.apiUrl}/register`;
    const deferred = this.$q.defer();

    this.$http
      .post(registerEnpoint, user)
      .then(deferred.resolve)
      .catch(deferred.reject);

    return deferred.promise;
  }

  login(credentials) {
    const loginEndpoint = `${this.apiUrl}/login`;
    const deferred = this.$q.defer();

    this.$http
      .post(loginEndpoint, credentials)
      .then((response) => {
        const { data: user } = response;

        this.identityService.setLoggedUser(user);
        this.$http.defaults.headers.common.Authorization = user.token;

        deferred.resolve(user);
      })
      .catch(deferred.reject);

    return deferred.promise;
  }
}
