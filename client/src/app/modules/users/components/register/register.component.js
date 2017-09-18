import templateUrl from './register.html';

class RegisterController {
  constructor($state, authService, notifierService) {
    this.$state = $state;
    this.authService = authService;
    this.notifier = notifierService;
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

  registerUser(validForm) {
    if (validForm) {
      this.authService
        .register(this.user)
        .then((user) => {
          const { _id, nickname } = user;

          this.mainComponent.setUser({ _id, nickname });
          this.$state.transitionTo('home');
        })
        .catch((error) => this.notifier.error(error));
    }
  }
}

export default {
  templateUrl,
  require: { mainComponent: '^^main' },
  controller: RegisterController
};
