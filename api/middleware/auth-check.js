const jwt = require('jsonwebtoken');

async function check(req, res, next){
    try {
        const token = await req.headers.authorization.split(" ")[1];
    
        const decoded = await jwt.verify(token, "core");
        const user = await decoded;

        req.user = user;

        next();
        
      } 
      catch (error) {
        res.json({message: 'Not Authorized', error: true})
      }
}


module.exports = check