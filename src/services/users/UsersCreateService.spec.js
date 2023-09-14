const UsersCreateService = require("./UsersCreateService");
const UsersRepositoryInMemory = require("../../repositories/users/UsersRepositoryInMemory");
const AppError = require("../../utils/AppError");

describe("UserCreateService", () => {
  let usersRepositoryInMemory = null;
  let usersCreateService = null;
  let user = {};
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersCreateService = new UsersCreateService(usersRepositoryInMemory);
    user = {
      name: "teste",
      email: "teste@gmail.com",
      password: "123",
    };
  });

  it("user should be create", async () => {
    const userCreated = await usersCreateService.execute(user);
    expect(userCreated).toHaveProperty("id");
  });

  it("user not should be create with exists email", async () => {
    const user2 = {
      name: "user2",
      email: "teste@gmail.com",
      password: "123",
    };
    await usersCreateService.execute(user);
    await expect(usersCreateService.execute(user2)).rejects.toEqual(
      new AppError("Email not allowed")
    );
  });

  it("user not should be create with exists name", async () => {
    const user2 = {
      name: "teste",
      email: "user2@gmail.com",
      password: "123",
    };
    await usersCreateService.execute(user);
    await expect(usersCreateService.execute(user2)).rejects.toEqual(
      new AppError("User already exists!")
    );
  });
});
