import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { findById } from '../models/User';

const strategyOptions = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtConfig = {
  session: false,
  failWithError: true,
};

const strategy = new Strategy(strategyOptions, (payload, done) => {
  findById(payload.id, { password: false }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  });
});
passport.use(strategy);

export const initialize = () => passport.initialize();
export const authenticate = () => passport.authenticate('jwt', jwtConfig);
