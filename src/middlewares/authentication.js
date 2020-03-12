const jwt = require('jsonwebtoken');

const auth = (req, res, next) =>{
    const token = req.headers['authorization'];
    if ((req.method=='GET') || req.url == '/login'){
        next();
    } else if (!token){
        res.status(401).send({ error: 'YOU NEED AUTH TOKEN'});
    } else {
        // Checking if the token is valid
        console.log(token);
        jwt.verify(token, 'M1sup3rS3CR3T0', function(err, user) {
            if (err) {
                res.status(401).send({
                    error: 'Token inválido'
                })
            } else {
                // Correcto, seguimos con la cadena de ejecución
                //next();
                res.send({
                    message: 'Vale, token válido'
                });
                //return undefined;
            }
        });
    }
};

module.exports = auth;