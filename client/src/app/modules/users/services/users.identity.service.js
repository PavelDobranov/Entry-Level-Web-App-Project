export default class IdentityService {
  constructor(localStorageService, $sessionStorage) {
    this.localStorageService = localStorageService;
    this.$sessionStorage = $sessionStorage;
  }

  setLoggedUser(user) {
    if (this.getRememberMe()) {
      this.$sessionStorage.remove('user');
      this.localStorageService.set('user', user);
    } else {
      this.localStorageService.remove('user');
      this.$sessionStorage.putObject('user', user);
    }
  }

  getLoggedUser() {
    if (this.getRememberMe()) {
      return this.localStorageService.get('user');
    }

    return this.$sessionStorage.getObject('user');
  }

  updateLoggedUser(newUser) {
    const user = this.getLoggedUser();

    Object.keys(newUser).forEach((key) => {
      user[key] = newUser[key];
    });

    this.setLoggedUser(user);
  }

  removeLoggedUser() {
    this.localStorageService.remove('user');
    this.$sessionStorage.remove('user');
  }

  setRememberMe(value) {
    this.localStorageService.set('remember', value);
  }

  getRememberMe() {
    return this.localStorageService.get('remember');
  }
}
