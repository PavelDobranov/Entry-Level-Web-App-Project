import templateUrl from './user-details.html';

class UserDetailsController {
  constructor($stateParams, $q, countriesDataService, usersDataService, notifierService) {
    this.userId = $stateParams.id;
    this.$q = $q;
    this.countriesDataService = countriesDataService;
    this.usersDataService = usersDataService;
    this.notifier = notifierService;
  }

  $onInit() {
    this.$q.all([this.usersDataService.getUser(this.userId), this.countriesDataService.getAll()])
      .then(([user, countries]) => {
        this.user = user;
        this.countries = countries;
      });
  }

  updateUser() {
    this.usersDataService
      .updateUser(this.userId, this.user)
      .then((user) => {
        const { _id, nickname } = user;
        this.mainComponent.setUser({ _id, nickname });

        this.notifier.success('Your profile has been successfully updated')
      })
      .catch((error) => this.notifier.error(error.message));
  }
}

export default {
  templateUrl,
  require: { mainComponent: '^^main' },
  controller: UserDetailsController
};
