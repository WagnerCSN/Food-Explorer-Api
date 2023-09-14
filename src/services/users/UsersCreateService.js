const { hash } = require("bcryptjs");
const AppError = require("../../utils/AppError");

class UsersCreateService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({ name, email, password }) {
    const hashedpassword = await hash(password, 8);
    const checkUserExist = await this.usersRepository.findByName(name);
    const checkEmailExist = await this.usersRepository.findByEmail(email);

    if (checkUserExist) {
      throw new AppError("User already exists!");
    }

    if (checkEmailExist) {
      throw new AppError("Email not allowed");
    }

    const userCreated = await this.usersRepository.create({
      name,
      email,
      password: hashedpassword,
    });

    return userCreated;
  }
}

module.exports = UsersCreateService;
