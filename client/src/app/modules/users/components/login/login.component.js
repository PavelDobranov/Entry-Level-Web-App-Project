import templateUrl from './login.html';

class LoginController {
  constructor($state, authService) {
    this.$state = $state;
    this.authService = authService;
  }

  $onInit() {
    this.credentials = { nickname: '', password: '' };
  }

  loginUser() {
    this.authService
      .login(this.credentials)
      .then((user) => this.$state.go('userDetails', { id: user._id }))
      .catch(console.log);
  }
}

export default {
  templateUrl,
  controller: LoginController
};
