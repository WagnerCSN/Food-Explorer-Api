const BlogRepository = require("../repositories/blog/BlogRepository");
const BlogCreateService = require("../services/blog/BlogCreateService");
const BlogUpdateService = require("../services/blog/BlogUpdateService");
const BlogUpdateRepository = require("../repositories/blog/BlogUpdateRepository");
const BlogDeleteRepository = require("../repositories/blog/BlogDeleteRepository");
const BlogDeleteService = require("../services/blog/BlogDeleteService");
const BlogIndexRepository = require("../repositories/blog/BlogIndexRepository");
const BlogIndexService = require("../services/blog/BlogIndexService");

class BlogController {
  async create(request, response, next) {
    try {
      const { title, comments, rating } = request.body;
      const { plate_id } = request.params;
      const  user_id  = request.user.id;

      const blogRepository = new BlogRepository();
      const blogCreateService = new BlogCreateService(blogRepository);
      await blogCreateService.execute({
        user_id,
        title,
        comments,
        rating,
        plate_id,
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async index(request, response, next) {
    try {
      const { plate_id, rating, id_blog } = request.query;

      const blogIndexRepository = new BlogIndexRepository();
      const blogIndexService = new BlogIndexService(blogIndexRepository);
      const blogSearch = await blogIndexService.execute({ plate_id, rating, id_blog });

      return response.json(blogSearch);
    } catch (error) {
      next(error);
    }
  }

  async update(request, response, next) {
    try {
      const { title, comments, rating } = request.body;
      const { id_blog } = request.params;
      const blogUpdateRepository = new BlogUpdateRepository();
      const blogUpdateService = new BlogUpdateService(blogUpdateRepository);
      await blogUpdateService.execute({ title, comments, rating, id_blog });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response, next) {
    try {
      const { id_blog } = request.params;
      const blogDeleteRepository = new BlogDeleteRepository();
      const blogDeleteService = new BlogDeleteService(blogDeleteRepository);
      await blogDeleteService.execute({ id_blog });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
