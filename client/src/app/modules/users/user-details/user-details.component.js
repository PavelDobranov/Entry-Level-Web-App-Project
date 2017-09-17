import templateUrl from './user-details.html';

class UserDetailsController {
  constructor($stateParams, UsersDataService) {
    this.userId = $stateParams.id;
    this.UsersDataService = UsersDataService;
  }

  $onInit() {
    this.UsersDataService
      .getUser(this.userId)
      .then((user) => this.user = user)
      .catch(error => console.log);
  }

  updateUser() {
    this.UsersDataService
      .updateUser(this.userId, this.user)
      .then(console.log)
      .catch(console.log);
  }
}

export const userDetailsComponent = {
  templateUrl,
  controller: UserDetailsController
};
