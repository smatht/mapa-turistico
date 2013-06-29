'use strict';
var url       = require('url'),
    path      = require('path'),
    MONGO_URL = (process.env.MONGOHQ_URL || 'mongodb://localhost:27017/mapaturistico'),
    REDISTOGO = url.parse(process.env.REDISTOGO_URL || 'http://localhost:6379'), //
    REDISHOST = REDISTOGO.hostname,
    REDISPORT = REDISTOGO.port,
    REDISAUTH = (process.env.REDISTOGO_URL ? REDISTOGO.auth.split(':')[1] : undefined);

module.exports = {
    PORT                    : (process.env.PORT || 3000),
    STATIC_DIR              : (process.env.STATIC_DIR || (path.join(__dirname, '../../public/img/uploads'))),
    TWITTER_CONSUMER_KEY    : (process.env.CONSUMER_KEY || 'ADYKO8XAM9m6gY50Nm1ng'),
    TWITTER_CONSUMER_SECRET : (process.env.CONSUMER_SECRET || 'mpuzBZccE0GUjwSkSMBFyNYCdHojHAVVa87rz7gtHk'),
    FACEBOOK_CLIENT_ID    : (process.env.CONSUMER_KEY || '554735134583042'),
    FACEBOOK_CLIENT_SECRET : (process.env.CONSUMER_SECRET || 'c46d8663a85cbb11949e3606f692e3f6'),
    MONGO_URL: MONGO_URL,
    session: {
        key   : 'proudplace.sid',
        secret: 'HelloWorld!!!'
    },
    sessionStore: {
        host: REDISHOST,
        port: REDISPORT,
        auth: REDISAUTH
    }
};
