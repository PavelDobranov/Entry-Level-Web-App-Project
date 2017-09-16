import templateUrl from './login.html';

class LoginController {
  constructor($state, AuthService) {
    this.$state = $state;
    this.AuthService = AuthService;
  }

  $onInit() {
    this.credentials = { nickname: '', password: '' };
  }

  loginUser() {
    // TODO: validate

    this.AuthService
      .login(this.credentials)
      .then(console.log);
  }
}

export const loginComponent = {
  templateUrl,
  controller: LoginController
};
