import { hashSync } from 'bcryptjs';
import User from '@/models/User';

/* Post request for signup */
export default async (req, res, next) => {
  const { username, email, password: pwd } = req.body;

  const password = hashSync(pwd, 10);

  try {
    const user = await User.findOne({ $or: [{ username }, { email }] }).exec();
    if (user) {
      console.log(user);
      return res.status(400).json({
        response: 'user or email already exists',
      });
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    return res.status(200).json({
      message: 'signup successfully',
      id: newUser._id,
      username: newUser.username,
    });
  } catch (err) {
    return next(err);
  }
};
