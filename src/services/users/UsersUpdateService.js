const { hash, compare } = require("bcryptjs");
const AppError = require("../../utils/AppError");

class UsersUpdateService {
  constructor(usersUpdateRepository) {
    this.usersUpdateRepository = usersUpdateRepository;
  }

  async execute({ name, email, password, old_password, role, id }) {
    const user = await this.usersUpdateRepository.findByUser(id);

    if (!user) {
      throw new AppError("User not found");
    }

    const usersWithEmaililExist = await this.usersUpdateRepository.findByUsers();
    const result = usersWithEmaililExist.find((mail) => mail.email === email);

    if (result && result.id !== user.id) {
      throw new AppError("This email is already in use!");
    }
    user.name = name;
    user.email = email;
    user.role = role;

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

    const updateuser = await this.usersUpdateRepository.update({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      id,
    });

    return updateuser;
  }
}

module.exports = UsersUpdateService;
