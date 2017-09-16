export class AuthService {
  constructor($http, $q, localStorageService, apiUrl) {
    this.$http = $http;
    this.$q = $q;
    this.localStorageService = localStorageService;
    this.apiUrl = apiUrl;
  }

  register(user) {
    const registerEnpoint = `${this.apiUrl}/register`;
    const deferred = this.$q.defer();

    this.$http
      .post(registerEnpoint, user)
      .then(deferred.resolve)
      .catch(deferred.reject)

    return deferred.promise;
  }

  login(credentials) {
    const loginEndpoint = `${this.apiUrl}/login`;
    const deferred = this.$q.defer();

    this.$http
      .post(loginEndpoint, credentials)
      .then((response) => {
        const { token, ...user } = response.data;

        this.localStorageService.set('access-token', token);

        deferred.resolve(user);
      })
      .catch(deferred.reject);

    return deferred.promise;
  }
}
