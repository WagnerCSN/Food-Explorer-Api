const AppError = require("../../utils/AppError");

class BlogUpdateService {
  constructor(blogUpdateRepository) {
    this.blogUpdateRepository = blogUpdateRepository;
  }

  async execute({ title, comments, rating, id_blog }) {
    const findBlog = await this.blogUpdateRepository.findByBlogWithUser(id_blog);
    
    if (!findBlog) {
      throw new AppError("Blog not found!");
    }

    findBlog.title = title;
    findBlog.comments = comments;
    findBlog.rating = rating;

    const blogUpdated = await this.blogUpdateRepository.update({
      title: findBlog.title,
      comments: findBlog.comments,
      rating: findBlog.rating,
      id_blog,
    });

    return blogUpdated;
  }
}

module.exports = BlogUpdateService;