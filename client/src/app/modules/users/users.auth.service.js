export class AuthService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  register(user) {
    const deferred = this.$q.defer();

    deferred.resolve(user);

    return deferred.promise;
  }
}
