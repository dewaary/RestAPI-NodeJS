var jwt = require('jsonwebtoken')
var config = require('../config/secret')

function verification(roles){
    return function(req, rest, next){
        var tokenWithBearer = req.header.authorization;
        if(tokenWithBearer) {
            var token = tokenWithBearer.split(' ')(1);

            jwt.verify(token, config.secret, function (error, decode) {
                if(err){
                    return rest.status(401).send({auth:false, message:'Unregistered Token!'});
                }else {
                    if(roles==2){
                        req.auth = decode;
                        next();
                    }else {
                        return rest.status(401).send({auth:false, message:'Role Authorization Failed!'});
                    }
                }
            });
        }else {

        }
    }
}