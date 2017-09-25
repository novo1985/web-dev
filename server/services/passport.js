const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (acessToken, refreshToken, profile, done) => {
      console.log('access token', acessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);
