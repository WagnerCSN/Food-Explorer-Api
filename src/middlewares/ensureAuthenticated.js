const { verify } = require("jsonwebtoken");
const authConfig = require("../configs/auth");
const AppError = require("../utils/AppError");

function ensureAuthenticated(request, response, next) {
    const authReader = request.headers;
    
    if(!authReader.cookie){
        throw new AppError("JWT token not informed!", 401);
    }
    const [, token] = authReader.cookie.split("token="); //Bearer xxxxx
    try{
      const {role, sub: user_id} = verify(token, authConfig.jwt.secret);

      request.user = {
        id: Number(user_id),
        role
      };
      return next();
    }catch{
        throw new AppError("Unauthorized", 401);
    }
}

module.exports = ensureAuthenticated;