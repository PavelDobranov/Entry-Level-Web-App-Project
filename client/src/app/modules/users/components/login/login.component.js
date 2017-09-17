import templateUrl from './login.html';

class LoginController {
  constructor($scope, $state, authService) {
    this.$scope = $scope;
    this.$state = $state;
    this.authService = authService;
  }

  $onInit() {
    this.credentials = { nickname: '', password: '' };
  }

  loginUser() {
    this.authService
      .login(this.credentials)
      .then((user) => {
        const { _id, nickname } = user;
        this.mainComponent.setUser({ _id, nickname });

        this.$state.transitionTo('home')
      })
      .catch(console.log);
  }
}

export default {
  templateUrl,
  require: { mainComponent: '^^main' },
  controller: LoginController,
};
