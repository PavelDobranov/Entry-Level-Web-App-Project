export class AuthService {
  constructor($http, $q, IdentityService, apiUrl) {
    this.$http = $http;
    this.$q = $q;
    this.IdentityService = IdentityService;
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

        this.IdentityService.setLoggedUser(user);
        this.$http.defaults.headers.common.Authorization = user.token;

        deferred.resolve(user);
      })
      .catch(deferred.reject);

    return deferred.promise;
  }
}
