const AppError = require("../../utils/AppError");
const UsersUpdateService = require("./UsersUpdateService");
const UsersUpdateRepositoryInMemory = require("../../repositories/users/UsersUpdateRepositoryInMemory");

describe("UsersUpdateService", () => {
  let usersUpdateRepositoryInMemory = null;
  let usersUpdateService = null;
  let user = {};
  beforeEach(() => {
    usersUpdateRepositoryInMemory = new UsersUpdateRepositoryInMemory();
    usersUpdateService = new UsersUpdateService(usersUpdateRepositoryInMemory);
  });

  it("user should exist", async () => {
    user = {
      id: "1",
      name: "teste",
      email: "teste@gmail.com",
    };
    const userCreated = await usersUpdateService.execute(user);
    expect(userCreated).toHaveProperty("id");
  });

  it("password should be correct", async () => {
    user = {
      id: "1",
      name: "teste",
      email: "teste@gmail.com",
      password: "123",
      old_password: "1234",
    };

    await expect(usersUpdateService.execute(user)).rejects.toEqual(
      new AppError("Current password is incorrect!")
    );
  });

  it("old_password should be exist", async () => {
    user = {
      id: "1",
      name: "teste",
      email: "teste@gmail.com",
      password: "123",
      // old_password: "1234",
    };

    await expect(usersUpdateService.execute(user)).rejects.toEqual(
      new AppError("Enter current password!")
    );
  });

  it("email should be use", async () => {
    user = {
      id: "1",
      name: "teste",
      email: "teste2@gmail.com",
      // password:"123",
      // old_password: "1234",
    };

    await expect(usersUpdateService.execute(user)).rejects.toEqual(
      new AppError("This email is already in use!")
    );
  });
});
