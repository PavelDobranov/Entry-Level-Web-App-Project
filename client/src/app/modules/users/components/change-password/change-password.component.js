import templateUrl from './change-password.html';

class ChangePasswordController {
  constructor($state, $stateParams, authService, notifierService) {
    this.$state = $state;
    this.userId = $stateParams.id;
    this.authService = authService;
    this.notifier = notifierService;
  }

  $onInit() {
    this.passwords = { old: '', new: '', confirmNew: '' };
  }

  changePassword(validForm) {
    if (validForm) {
      this.authService
        .changePassword(this.userId, this.passwords.old, this.passwords.new)
        .then(() => {
          this.notifier.success('Your password has been successfully updated');
          this.$state.transitionTo('userDetails', { id: this.userId });
        })
        .catch((error) => this.notifier.error(error.message));
    }
  }
}

export default {
  templateUrl,
  controller: ChangePasswordController
};
