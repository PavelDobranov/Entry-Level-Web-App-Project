import mongoose, { Schema } from 'mongoose';

const CountrySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.model('Country', CountrySchema);
