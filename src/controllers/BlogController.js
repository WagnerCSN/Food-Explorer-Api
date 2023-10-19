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
      const { name, email, comments, rating } = request.body;
      const { plate_id } = request.params;

      const blogRepository = new BlogRepository();
      const blogCreateService = new BlogCreateService(blogRepository);
      await blogCreateService.execute({
        name,
        email,
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
      const { plate_name, rating } = request.query;

      const blogIndexRepository = new BlogIndexRepository();
      const blogIndexService = new BlogIndexService(blogIndexRepository);
      const blogSearch = await blogIndexService.execute({ plate_name, rating });

      return response.json(blogSearch);
    } catch (error) {
      next(error);
    }
  }

  async update(request, response, next) {
    try {
      const { name, email, comments, rating } = request.body;

      const { id } = request.params;
      const blogUpdateRepository = new BlogUpdateRepository();
      const blogUpdateService = new BlogUpdateService(blogUpdateRepository);
      await blogUpdateService.execute({ name, email, comments, rating, id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      const blogDeleteRepository = new BlogDeleteRepository();
      const blogDeleteService = new BlogDeleteService(blogDeleteRepository);
      await blogDeleteService.execute({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
