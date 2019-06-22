import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

model('User', UserSchema, 'users');
export default model('User');
