function checkAuthenticated(req, res, next) {
    console.log('Is gebruik aangemeld?');
    req.body.authId

    if (true) {
        next();
    } else {
    }
}

module.exports = checkAuthenticated