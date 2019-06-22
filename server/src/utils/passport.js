import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import User from '../models/User';

const strategyOptions = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtConfig = {
  session: false,
  failWithError: true,
};

const strategy = new Strategy(strategyOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.id, { password: false }).exec();
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
});
passport.use(strategy);

export const initialize = () => passport.initialize();
export const authenticate = () => passport.authenticate('jwt', jwtConfig);
