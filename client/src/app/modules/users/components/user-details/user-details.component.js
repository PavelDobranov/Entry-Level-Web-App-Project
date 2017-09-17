import templateUrl from './user-details.html';

class UserDetailsController {
  constructor($stateParams, usersDataService) {
    this.userId = $stateParams.id;
    this.usersDataService = usersDataService;
  }

  $onInit() {
    this.usersDataService
      .getUser(this.userId)
      .then((user) => this.user = user)
      .catch(error => console.log);
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
