export default class IdentityService {
  constructor(localStorageService) {
    this.localStorageService = localStorageService;
  }

  setLoggedUser(user) {
    this.localStorageService.set('user', user);
  }

  getLoggedUser() {
    return this.localStorageService.get('user');
  }

  updateLoggedUser(newUser) {
    const user = this.localStorageService.get('user')

    Object.keys(newUser).forEach((key) => {
      user[key] = newUser[key];
    });

    this.localStorageService.set('user', user);
  }

  removeLoggedUser() {
    this.localStorageService.remove('user');
  }
}
