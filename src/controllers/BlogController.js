class BlogController{
    async create(request, response) {
        const { name, email, comments } = request.body;
        const { platesId } = request.params;

        blogRepository = new BlogRepository();
        blogCreateService = new BlogCreateService(blogRepository);
        await blogCreateService.execute({name, email, comments, platesId});

        response.json();

    }
  
    async show(request, response) {
      
    }
  
    async index(request, response) {
     
    }
  
    async update(request, response){
      
    }
  
    async delete(request, response) {
      
    }
}

module.exports = BlogController