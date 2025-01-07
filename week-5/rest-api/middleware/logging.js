function logParams(req, res, next) {
    console.log('Parameters van verzoek: ', req.params);
    next();
}

module.exports = {
    logParams
}