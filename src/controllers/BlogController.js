class BlogController{
    async create(request, response) {
        const { name, email, comments, rating } = request.body;
        const { platesId } = request.params;

        blogRepository = new BlogRepository();
        blogCreateService = new BlogCreateService(blogRepository);
        await blogCreateService.execute({name, email, comments, rating, platesId});

        response.json();

    }
  
    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        // const id = request.user.id;
        const { id } = request.params;
        const usersUpdateRepository = new UsersUpdateRepository();
        const usersUpdateService = new UsersUpdateService(usersUpdateRepository);
        await usersUpdateService.execute({
          name,
          email,
          password,
          old_password,
          id,
        });
    
        response.json();
      }
      
      async delete(request, response){
        const {id} = request.params;
    
        const usersDeleteRepository = new UsersDeleteRepository();
        const usersDeleteService = new UsersDeleteService(usersDeleteRepository);
        await usersDeleteService.execute({id});
    
        return response.json();
      }
}

module.exports = BlogController