var jwt = require('jsonwebtoken')
var config = require('../config/secret')

function verification(){
    return function(req, rest, next){

        var tokenWithBearer = req.headers.authorization;
        if(tokenWithBearer) {
            var token = tokenWithBearer.split(' ')[1];

            jwt.verify(token, config.secret, function (error, decoded) {
                if(error){
                    return rest.status(401).send({auth:false, message:'Unregistered Token!'});
                }else {
                    if(roles == 2){
                        req.auth = decoded;
                        next();
                    }else {
                        return rest.status(401).send({auth:false, message:'Role Authorization Failed!'});
                    }
                }
            });
        }else {
            return rest.status(401).send({auth:false, message:'Token Not Available!'});
        }
    }
}

module.exports = verification;