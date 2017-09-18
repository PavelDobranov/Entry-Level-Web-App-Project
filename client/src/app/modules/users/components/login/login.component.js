import templateUrl from './login.html';

class LoginController {
  constructor($scope, $state, identityService, authService) {
    this.$scope = $scope;
    this.$state = $state;
    this.identityService = identityService;
    this.authService = authService;
  }

  $onInit() {
    this.data = {
      nickname: '',
      password: '',
      remember: this.identityService.getRememberMe()
    };
  }

  loginUser() {
    this.authService
      .login(this.data)
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
