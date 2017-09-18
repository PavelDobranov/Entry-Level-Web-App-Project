import templateUrl from './change-password.html';

class ChangePasswordController {
  constructor($state, $stateParams, authService) {
    this.$state = $state;
    this.userId = $stateParams.id;
    this.authService = authService;
  }

  $onInit() {
    this.passwords = { old: '', new: '', confirmNew: '' };
  }

  changePassword(validForm) {
    if (validForm) {
      this.authService
        .changePassword(this.userId, this.passwords.old, this.passwords.new)
        .then();
    }
  }
}

export default {
  templateUrl,
  controller: ChangePasswordController
};
