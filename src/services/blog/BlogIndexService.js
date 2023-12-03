const AppError = require("../../utils/AppError");

class BlogIndexService{
    constructor(blogIndexRepository){
        this.blogIndexRepository = blogIndexRepository;
    }

    async execute({rating, plate_id}){

        if(rating){
            const blogIndexName = await this.blogIndexRepository.indexByRating(rating);
            if(blogIndexName.length ===0){
                throw new AppError("Enter a valid rating!");
            }
            
             return blogIndexName;
        }
            
       
        if(plate_id){
            const blogIndexWithPlate = await this.blogIndexRepository.selectByPlate(plate_id);
           const result = blogIndexWithPlate.map(blog =>{
                return{
                    id: blog.id,
                    title: blog.title,
                    comments: blog.comments,
                    rating: blog.rating,
                    created_at: blog.created_at,
                    name: blog.name,
                    plate_id: blog.plate_id
                }
           })
            if(blogIndexWithPlate.length ===0){
                //throw new AppError("Enter a valid plate!");
            }
           
             return result;
        }
    }
}

module.exports = BlogIndexService;