const keys = require('../keys');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const User= require('../Models/userModel');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
};

const Strategy = new JwtStrategy(opts, (payload, next) => {
  User.forge({ id: payload.id }).fetch().then(res => {
    next(null, res);
  });
});

passport.use(Strategy);

module.exports = passport;
