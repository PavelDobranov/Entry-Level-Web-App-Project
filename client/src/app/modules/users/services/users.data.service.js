export default class UsersDataService {
  constructor($http, $q, identityService, apiUrl) {
    this.$http = $http;
    this.$q = $q;
    this.identityService = identityService;
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
      .put(updateUserendpoint, updatedUser)
      .then((response) => {
        const { data: user } = response;

        this.identityService.updateLoggedUser(user);

        deferred.resolve(user);
      })
      .catch(deferred.reject);

    return deferred.promise;
  }
}
