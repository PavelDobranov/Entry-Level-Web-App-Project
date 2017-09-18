export default class NotifierService {
  constructor(notify) {
    this.notify = notify;
    this.options = { position: 'center', duration: '5000' };
  }

  success(message) {
    this.notify({ ...this.options, message, classes: 'alert-success' });
  }

  error(message) {
    this.notify({ ...this.options, message, classes: 'alert-danger' });
  }
}
