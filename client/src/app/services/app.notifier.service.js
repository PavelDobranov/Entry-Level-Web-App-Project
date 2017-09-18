export default class NotifierService {
  constructor(notify) {
    this.notify = notify;
    this.options = { position: 'center', duration: '10000' };
  }

  success(message) {
    this.options.classes = 'alert-success';
    this._showMessage(message);
  }

  error(message) {
    this.options.classes = 'alert-danger';
    this._showMessage(message);
  }

  _showMessage(message) {
    if (Array.isArray(message) && message.length > 1) {
      const messages = message.map((msg) => `<li>${msg}</li>`).join('');
      const messageTemplate = `<ul>${messages}</ul>`;

      this.notify({ ...this.options, messageTemplate });
    } else if (Array.isArray(message) && message.length === 1) {
      this.notify({ ...this.options, message: message[0] });
    } else {
      this.notify({ ...this.options, message });
    }
  }
}
