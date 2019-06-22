import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcryptjs';

import User from '@/models/User';

/* POST request for login */
export default async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).exec();

    if (!user) {
      return res.status(404).json({
        response: 'user does not exist',
      });
    }

    if (!compareSync(password, user.password)) {
      return res.status(401).json({
        response: 'password does not match',
      });
    }

    const token = sign({
      id: user._id,
    }, process.env.JWT_SECRET);

    return res.status(200).json({
      message: 'login successful',
      token,
      id: user._id,
      username: user.username,
    });
  } catch (err) {
    return next(err);
  }
};
