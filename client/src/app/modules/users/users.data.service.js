export class UsersDataService {
  constructor($http, $q, apiUrl) {
    this.$http = $http;
    this.$q = $q;
    this.apiUrl = apiUrl;
  }

  getUser(userId) {
    const getUserEndpoint = `${this.apiUrl}/${userId}`;
    const deferred = this.$q.defer();

    this.$http
      .get(getUserEndpoint)
      .then(({ data: user }) => deferred.resolve(user))
      .catch(deferred.reject);

    return deferred.promise;
  }

  updateUser(userId, updatedUser) {
    const updateUserendpoint = `${this.apiUrl}/${userId}`;
    const deferred = this.$q.defer();

    this.$http
      .post(updateUserendpoint, credentials)
      .then(deferred.resolve)
      .catch(deferred.reject);

    return deferred.promise;
  }
}
