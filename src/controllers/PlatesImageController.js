const PlatesImageUpdateRepository = require("../repositories/platesImage/PlatesImageUpdateRepository");
const PlatesImageUpdateService = require("../services/platesImage/PlatesImageUpdateService");

class PlatesImageController{
async update(request, response, next) {
    try {
        const {id} = request.params;
        const imageFileName = request.file.filename; 
        const platesImageUpdateRepository = new PlatesImageUpdateRepository();
        const platesImageUpdateService = new PlatesImageUpdateService(platesImageUpdateRepository);
        await platesImageUpdateService.execute({id, imageFileName
       
      });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PlatesImageController;