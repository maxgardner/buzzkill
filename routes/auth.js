const passport = require('../config/passport');

module.exports = (router, User) => {

  router.post('/auth/signup', (req, res, next) => {
    return passport.authenticate('local-signup', {
        successRedirect : '/login',
        failureRedirect : '/signup',
        failureFlash : true
    })
  });

  router.post('/auth/login', (req, res, next) => {
    return passport.authenticate('local-login', {
        successRedirect : '/dashboard',
        failureRedirect : '/login',
        failureFlash : true
    })
  });

  return router;
}
