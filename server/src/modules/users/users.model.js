import mongoose, { Schema } from 'mongoose';
import { compareSync, hashSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import env from '../../config/env.config';

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
  authenticate(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign({ _id: this._id }, env.jwtSecret);
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