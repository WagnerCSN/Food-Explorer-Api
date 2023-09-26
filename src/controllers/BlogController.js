// const BlogRepository = require("../repositories/blog/BlogRepository");
// const BlogCreateService = require("../services/blog/BlogCreateService");
// const BlogUpdateService = require("../services/blog/BlogUpdateService");
// const BlogUpdateRepository = require("../repositories/blog/BlogUpdateRepository");
// const BlogDeleteRepository = require("../repositories/blog/BlogDeleteRepository");
// const BlogDeleteService = require("../services/blog/BlogDeleteService");
// const BlogShowRepository = require("../repositories/blog/BlogShowRepository");
// const BlogShowService = require("../services/blog/BlogShowService");
// const BlogIndexRepository = require("../repositories/blog/BlogIndexRepository");
// const BlogIndexService = require("../services/blog/BlogIndexService");

// class BlogController{
//     async create(request, response) {
//         const { name, email, comments, rating } = request.body;
//         const { plates_id } = request.params;

//         const blogRepository = new BlogRepository();
//         const blogCreateService = new BlogCreateService(blogRepository);
//         await blogCreateService.execute({name, email, comments, rating, plates_id});

//         response.json();

//     }

//     // async show(request, response){
//     //   const { id } = request.params;
//     //   // const { plates_id } = request.params;
  
//     //   const blogShowRepository = new BlogShowRepository();
//     //   const blogShowService = new BlogShowService(blogShowRepository);
//     //   const blogShow = await blogShowService.execute({id});
//     //   response.json(blogShow);
  
//     // }
  
//     async index(request, response){
//       const { id, name} = request.query;
  
//       const blogIndexRepository = new BlogIndexRepository();
//       const blogIndexService = new BlogIndexService(blogIndexRepository);
//       const blogSearch = await blogIndexService.execute({id, name});
//       response.json(blogSearch);
  
//     }
  
//     async update(request, response) {
//         const { name, email, comments, rating } = request.body;
//         // const id = request.user.id;
//         const { id } = request.params;
//         const blogUpdateRepository = new BlogUpdateRepository();
//         const blogUpdateService = new BlogUpdateService(blogUpdateRepository);
//         await blogUpdateService.execute({name, email, comments, rating, id});
    
//         response.json();
//       }
      
//       async delete(request, response){
//         const {id} = request.params;
    
//         const blogDeleteRepository = new BlogDeleteRepository();
//         const blogDeleteService = new BlogDeleteService(blogDeleteRepository);
//         await blogDeleteService.execute({id});
    
//         return response.json();
//       }
// }

// module.exports = BlogController