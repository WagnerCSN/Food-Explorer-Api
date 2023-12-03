const AppError = require("../../utils/AppError");

class BlogDeleteService{
    constructor(blogDeleteRepository){
        this.blogDeleteRepository = blogDeleteRepository;
    }

    async execute({id_blog}){
        const checkBlogExist = await this.blogDeleteRepository.findByBlog(id_blog);

        if(!checkBlogExist){
            throw new AppError("This blog does not have!");
        }

        await this.blogDeleteRepository.deleteBlog(id_blog);

    }
}
module.exports = BlogDeleteService;