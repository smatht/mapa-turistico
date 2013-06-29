'use strict';

var cfg             = require('../config').cfg,
    passport        = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    User            = require('../models/user'),
    findOrCreateFacebook,
    findUserById;

findOrCreateFacebook = function (token, tokenSecret, profile, done) {
    User.findOrCreate({
        username    : profile.username,
        photo       : profile._json.profile_picture_data_url,
        //photo       : profile.picture,
        provider    : 'facebook',
        provider_id : profile._json.id_str,
        token       : token,
        tokenSecret : tokenSecret
    }, done);
    //console.log('aca el contenido de la foto: '+User.photo)
};

findUserById = function (id, done) {
    User.findById(id, function (err, user) {
        if (err) {return done(err);}
        if (!user) {return done(null, {});}



        done(null, {
            id      : user._id || undefined,
            username: user.username,
            provider: user.provider,
            avatar  : user.photo
        });
    });
};

module.exports = function () {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(findUserById);

    passport.use(new FacebookStrategy({
        clientID: cfg.FACEBOOK_CLIENT_ID,
        clientSecret: cfg.FACEBOOK_CLIENT_SECRET,
        callbackURL: '/auth/facebook/callback'
    }, findOrCreateFacebook));
};