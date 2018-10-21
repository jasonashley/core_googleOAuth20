const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const googleStrategy20 = require("./passportStrategies/googleOAuth20");

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  googleStrategy20(passport, User);
};
