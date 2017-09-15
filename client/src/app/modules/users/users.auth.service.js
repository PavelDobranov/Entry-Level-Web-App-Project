export class AuthService {
  constructor($http, $q, apiUrl) {
    this.$http = $http;
    this.$q = $q;
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
}
