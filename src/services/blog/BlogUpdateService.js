const AppError = require("../../utils/AppError");

class BlogUpdateService {
  constructor(blogUpdateRepository) {
    this.blogUpdateRepository = blogUpdateRepository;
  }

  async execute({ user_id, title, comments, rating, id }) {
    const blogs = await this.blogUpdateRepository.findByBlogWithUser(user_id);
    const findBlog = blogs.find(blog => blog.id ===id)
    
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
      id,
    });

    return blogUpdated;
  }
}

module.exports = BlogUpdateService;