import mongoose from 'mongoose';

// fname, lname, phone, email, password, confirmPassword
const UserSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      default: '',
      max: 20,
    },
    lname: {
      type: String,
      required: true,
      default: '',
      max: 20,
    },
    email: {
      type: String,
      required: true,
      default: '',
      max: 50,
      unique: true,
      index: 1,
    },
    phone: {
      type: String,
      required: true,
      default: '',
      max: 20,
    },
    password: {
      type: String,
      required: true,
      default: '',
      max: 20,
      min: 8,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model('User', UserSchema);

export default user;
