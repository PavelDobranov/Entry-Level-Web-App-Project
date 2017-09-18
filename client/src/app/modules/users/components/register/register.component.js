import templateUrl from './register.html';

class RegisterController {
  constructor($state, authService) {
    this.$state = $state;
    this.authService = authService;
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
    this.authService
      .register(this.user)
      .then(console.log);
  }
}

export default {
  templateUrl,
  controller: RegisterController
};
