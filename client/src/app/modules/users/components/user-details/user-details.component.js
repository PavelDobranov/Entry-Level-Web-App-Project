import templateUrl from './user-details.html';

class UserDetailsController {
  constructor($stateParams, $q, countriesDataService, usersDataService) {
    this.userId = $stateParams.id;
    this.$q = $q;
    this.countriesDataService = countriesDataService;
    this.usersDataService = usersDataService;
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
      })
      .catch(console.log);
  }
}

export default {
  templateUrl,
  require: { mainComponent: '^^main' },
  controller: UserDetailsController
};
