const SessionsRepository = require("../repositories/sessions/SessionsRepository");
const SessionsCreateService = require("../services/sessions/SessionsCreateService");

class SessionsController {
  async create(request, response, next) {
    try {
      const { email, password } = request.body;

      const sessionsRepository = new SessionsRepository();
      const sessionsCreateService = new SessionsCreateService(
        sessionsRepository
      );
      const result = await sessionsCreateService.execute({ email, password });

      response.cookie("token", result.token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 15*60*1000
      });

      response.json({user: result.user});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SessionsController;
