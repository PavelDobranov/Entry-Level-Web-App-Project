export default class AuthService {
  constructor($http, $q, identityService, apiUrl) {
    this.$http = $http;
    this.$q = $q;
    this.identityService = identityService;
    this.apiUrl = apiUrl;
  }

  register(user) {
    const registerEnpoint = `${this.apiUrl}/users/register`;
    const deferred = this.$q.defer();

    this.$http
      .post(registerEnpoint, user)
      .then(() => {
        const { nickname, password } = user;
        return this.login({ nickname, password });
      })
      .then(deferred.resolve)
      .catch((response) => {
        if (response.data.errors) {
          const errors = response.data.errors;
          const message = Object.keys(errors).map((key) => `${errors[key].path} ${errors[key].message}`);

          return deferred.reject({ message });
        }

        return deferred.reject(response);
      });

    return deferred.promise;
  }

  login({ remember, ...credentials }) {
    const loginEndpoint = `${this.apiUrl}/users/login`;
    const deferred = this.$q.defer();

    this.$http
      .post(loginEndpoint, credentials)
      .then((response) => {
        const { data: user } = response;

        this.identityService.setRememberMe(remember);
        this.identityService.setLoggedUser(user);
        this.$http.defaults.headers.common.Authorization = user.token;

        deferred.resolve(user);
      })
      .catch((response) => deferred.reject(response.data));

    return deferred.promise;
  }

  logout() {
    const deferred = this.$q.defer();

    this.$http.defaults.headers.common.Authorization = null;
    this.identityService.removeLoggedUser();
    deferred.resolve(true);

    return deferred.promise;
  }

  changePassword(userId, oldPassword, newPassword) {
    const loginEndpoint = `${this.apiUrl}/users/${userId}/change-password`;
    const deferred = this.$q.defer();

    this.$http
      .put(loginEndpoint, { oldPassword, newPassword })
      .then((response) => {
        const { data: user } = response;

        this.identityService.setLoggedUser(user);
        this.$http.defaults.headers.common.Authorization = user.token;

        deferred.resolve(user);
      })
      .catch((response) => deferred.reject(response.data));

    return deferred.promise;
  }
}
