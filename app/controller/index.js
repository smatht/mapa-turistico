'use strict';

module.exports = function (req, res) {
    var prof = req.user;
    //console.log('aca el contenido de la foto: '+prof.avatar);
    res.render('index', {
        title: 'Mapa en tiempo real',
        description: 'Mi primer mapa',
        profile: prof
    });
};