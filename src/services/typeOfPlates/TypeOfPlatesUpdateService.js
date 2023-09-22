const AppError = require("../../utils/AppError");

class TypeOfPlatesUpdateService {
  constructor(typeOfPlatesUpdateRepository) {
    this.typeOfPlatesUpdateRepository = typeOfPlatesUpdateRepository;
  }

  async execute({ name, email, password, old_password, id }) {
    const user = await this.typeOfPlatesUpdateRepository.findByUser(id);

    if (!user) {
      throw new AppError("User not found");
    }

    const typeOfPlatesWithEmaililExist = await this.typeOfPlatesUpdateRepository.findByTypeOfPlates();
    const result = typeOfPlatesWithEmaililExist.find((mail) => mail.email === email);

    if (result && result.id !== user.id) {
      throw new AppError("This email is already in use!");
    }
    user.name = name;
    user.email = email;

    if (password && !old_password) {
      throw new AppError("Enter current password!");
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("Current password is incorrect!");
      }

      user.password = await hash(password, 8);
    }

    const updateuser = await this.typeOfPlatesUpdateRepository.update({
      name: user.name,
      email: user.email,
      password: user.password,
      id,
    });

    return updateuser;
  }
}

module.exports = TypeOfPlatesUpdateService;