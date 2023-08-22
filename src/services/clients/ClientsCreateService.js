const { hash } = require("bcryptjs");
const AppError = require("../../utils/AppError");

class ClientsCreateService {
  constructor(clientsRepository) {
    this.clientsRepository = clientsRepository;
  }
  async execute({ name, email, password }) {
    const hashedpassword = await hash(password, 8);
    const checkUserExist = await this.clientsRepository.findByName(name);
    const checkEmailExist = await this.clientsRepository.findByEmail(email);

    if (checkUserExist) {
      throw new AppError("User already exists!");
    }

    if (checkEmailExist) {
      throw new AppError("Email not allowed");
    }

    const userCreated = await this.clientsRepository.create({
      name,
      email,
      password: hashedpassword,
    });

    return userCreated;
  }
}

module.exports = ClientsCreateService;
