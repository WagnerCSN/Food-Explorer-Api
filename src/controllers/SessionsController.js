const SessionsRepository = require("../repositories/sessions/SessionsRepository");
const SessionsCreateService = require("../services/sessions/SessionsCreateService");
// const SessionsUpdateService = require("../services/sessions/SessionsUpdateService");
// const SessionsUpdateRepository = require("../repositories/sessions/SessionsUpdateRepository");
// const SessionsDeleteRepository = require("../repositories/sessions/SessionsDeleteRepository");
// const SessionsDeleteService = require("../services/sessions/SessionsDeleteService");
// const SessionsIndexRepository = require("../repositories/sessions/SessionsIndexRepository");
// const SessionsIndexService = require("../services/sessions/SessionsIndexService");

class SessionsController{
    async create(request, response) {
        const { email, password } = request.body;

        const sessionsRepository = new SessionsRepository();
        const sessionsCreateService = new SessionsCreateService(sessionsRepository);
        const result = await sessionsCreateService.execute({email, password});

        return response.json(result);

    }

    // async index(request, response){
    //   const { plate_name, rating} = request.query;
  
    //   const SessionsIndexRepository = new BlogIndexRepository();
    //   const blogIndexService = new BlogIndexService(blogIndexRepository);
    //   const blogSearch = await blogIndexService.execute({plate_name, rating});
      
    //   return response.json(blogSearch);
  
    // }
  
    // async update(request, response) {
    //     const { name, email, comments, rating } = request.body;

    //     const { id } = request.params;
    //     const blogUpdateRepository = new BlogUpdateRepository();
    //     const blogUpdateService = new BlogUpdateService(blogUpdateRepository);
    //     await blogUpdateService.execute({name, email, comments, rating, id});
    
    //     return response.json();
    //   }
      
    //   async delete(request, response){
    //     const {id} = request.params;
    
    //     const blogDeleteRepository = new BlogDeleteRepository();
    //     const blogDeleteService = new BlogDeleteService(blogDeleteRepository);
    //     await blogDeleteService.execute({id});
    
    //     return response.json();
    //   }
}

module.exports = SessionsController