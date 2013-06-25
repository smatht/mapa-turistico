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
    STATIC_DIR              : (process.env.STATIC_DIR || (path.join(__dirname, '../../uploads'))),
    TWITTER_CONSUMER_KEY    : (process.env.CONSUMER_KEY || 'y8szxb2vTxL3VQTKm4lLvQ'),
    TWITTER_CONSUMER_SECRET : (process.env.CONSUMER_SECRET || 'TCzdX9ff8iP4B3aKTNLw7W5yfoeDylXWpvQAnD9bIos'),
    // TWITTER_CONSUMER_KEY    : (process.env.CONSUMER_KEY || '2gN0qd8cKZMbp14ZwrJ7fA'),
    // TWITTER_CONSUMER_SECRET : (process.env.CONSUMER_SECRET || 'fqlvOlsjenOFUG8a58HW0RUwQ6O0wz9VYAZllPxg'),
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
