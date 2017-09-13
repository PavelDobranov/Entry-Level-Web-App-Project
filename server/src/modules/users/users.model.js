import mongoose, { Schema } from 'mongoose';

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
  toJSON() {
    const { _id, nickname, email, phone } = this;
    return { _id, nickname, email, phone };
  }
};

export default mongoose.model('User', UserSchema);
