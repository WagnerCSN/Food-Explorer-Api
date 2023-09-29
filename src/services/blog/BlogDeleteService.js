const AppError = require("../../utils/AppError");

class BlogDeleteService{
    constructor(blogDeleteRepository){
        this.blogDeleteRepository = blogDeleteRepository;
    }

    async execute({id}){
        const checkBlogExist = await this.blogDeleteRepository.findByBlog(id);

        if(!checkBlogExist){
            throw new AppError("This blog does not have!");
        }

        const deletedBlog = await this.blogDeleteRepository.deleteBlog(id);

        if(deletedBlog){
            throw new AppError("Successfully deleted");
        }

    }
}
module.exports = BlogDeleteService;