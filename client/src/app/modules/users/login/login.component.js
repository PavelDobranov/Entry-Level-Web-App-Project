import templateUrl from './login.html';

class LoginController {
  constructor($state, AuthService) {
    this.$state = $state;
    this.AuthService = AuthService;
  }

  $onInit() {
    this.credentials = { nickname: 'pdobranov', password: 'fixedgear4095' };
  }

  loginUser() {
    this.AuthService
      .login(this.credentials)
      .then((user) => this.$state.go('userDetails', { id: user._id }));
  }
}

export const loginComponent = {
  templateUrl,
  controller: LoginController
};
