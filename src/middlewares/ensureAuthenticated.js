const { verify } = require("jsonwebtoken");
const authConfig = require("../configs/auth");
const AppEror = require("../utils/AppError");

function ensureAuthenticated(request, response, next) {
    const authReader = request.headers;

    if(!authReader.cookie){
        throw new AppEror("JWT token not informed!", 401);
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
        throw new AppEror("Unauthorized", 401);
    }
}

module.exports = ensureAuthenticated;