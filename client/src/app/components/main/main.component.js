import templateUrl from './main.html';

class MainController {
  constructor($state, identityService, authService) {
    this.$state = $state;
    this.authService = authService;
    this.identityService = identityService;
  }

  $onInit() {
    const user = this.identityService.getLoggedUser();

    if (user) {
      const { _id, nickname } = user;
      this.setUser({ _id, nickname });
    }
  }

  setUser(user) {
    this.user = user;
  }

  logoutUser() {
    this.authService
      .logout()
      .then(() => {
        this.user = null;
        this.$state.transitionTo('login');
      });
  }
}

export default {
  templateUrl,
  controller: MainController
};
