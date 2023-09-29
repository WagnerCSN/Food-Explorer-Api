const AppError = require("../../utils/AppError");

class BlogUpdateService {
  constructor(blogUpdateRepository) {
    this.blogUpdateRepository = blogUpdateRepository;
  }

  async execute({ comments, rating, id }) {
    const blog = await this.blogUpdateRepository.findByBlog(id);
    
    if (!blog) {
      throw new AppError("Blog not found!");
    }

    blog.comments = comments;
    blog.rating = rating;

    const blogUpdated = await this.blogUpdateRepository.update({
      comments: blog.comments,
      rating: blog.rating,
      id,
    });

    return blogUpdated;
  }
}

module.exports = BlogUpdateService;