const SessionsRepository = require("../repositories/sessions/SessionsRepository");
const SessionsCreateService = require("../services/sessions/SessionsCreateService");

class SessionsController{
    async create(request, response) {
        const { email, password } = request.body;

        const sessionsRepository = new SessionsRepository();
        const sessionsCreateService = new SessionsCreateService(sessionsRepository);
        const result = await sessionsCreateService.execute({email, password});

        return response.json(result);
    }
}

module.exports = SessionsController