export default class IdentityService {
  constructor(localStorageService) {
    this.localStorageService = localStorageService;
  }

  setLoggedUser(user) {
    this.localStorageService.set('user', user);
  }

  removeLoggedUser() {
    this.localStorageService.remove('user');
  }

  getLoggedUser() {
    return this.localStorageService.get('user');
  }
}
