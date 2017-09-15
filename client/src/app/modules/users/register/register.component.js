import templateUrl from './register.html';

class RegisterController {
  constructor($state, AuthService) {
    this.$state = $state;
    this.AuthService = AuthService;
  }

  $onInit() {
    this.user = {
      nickname: '',
      password: '',
      confirmPassword: '',
      email: '',
      phone: ''
    }
  }

  registerUser() {
    // TODO: validate

    this.AuthService
      .register(this.user)
      .then(console.log);
  }
}

export const registerComponent = {
  templateUrl,
  controller: RegisterController
};
