const jwt = require('jsonwebtoken');

const isAuthenicated = (req, res, next) => {
    try{
       const token = req.cookies.token;
       console.log(token);
       if(!token){
        return res.status(400).json({message: "user not Authenticated."});
       }
       const decode = jwt.verify(token, process.env.SECRET_KEY);
       if(!decode) {
          return res.status(400).json({message: "Invalid token"});
       }
       req.id = decode.userId;
       next();
    }catch(err){
        console.log(err);
    }
}

module.exports = isAuthenicated;