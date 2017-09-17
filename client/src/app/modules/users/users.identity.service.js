export class IdentityService {
  constructor(localStorageService) {
    this.localStorageService = localStorageService;
  }

  setLoggedUser({ token, ...user }) {
    this.localStorageService.set('user', user);
    this.localStorageService.set('access-token', token);
  }

  removeLoggedUser() {
    this.localStorageService.remove('user');
    this.localStorageService.remove('access-token');
  }

  getLoggedUser() {
    return this.localStorageService.get('user');
  }

  getAccessToken() {
    return this.localStorageService.get('access-token');
  }
}
