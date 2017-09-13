import mongoose, { Schema } from 'mongoose';
import { hashSync } from 'bcrypt-nodejs';

const UserSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 40
  },
  email: {
    type: String,
    required: true,
    maxlength: 40
  },
  phone: {
    type: Number,
    required: true
  }
}, { timestamps: true });

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  toJSON() {
    const { _id, nickname, email, phone } = this;
    return { _id, nickname, email, phone };
  }
};

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }

  return next();
});

export default mongoose.model('User', UserSchema);
