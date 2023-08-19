const AppError = require("../utils/AppError");
const ClientsUpdateService = require("./ClientsUpdateService");
const ClientsUpdateRepositoryInMemory = require("../repositories/ClientsUpdateRepositoryInMemory");

describe("ClientsUpdateService", () => {
  let clientsUpdateRepositoryInMemory = null;
  let clientsUpdateService = null;
  let user = {};
  beforeEach(() => {
    clientsUpdateRepositoryInMemory = new ClientsUpdateRepositoryInMemory();
    clientsUpdateService = new ClientsUpdateService(
      clientsUpdateRepositoryInMemory
    );
  });

  it("user should exist", async () => {
    user = {
      id: "1",
      name: "teste",
      email: "teste@gmail.com",
    };
    const userCreated = await clientsUpdateService.execute(user);
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

    await expect(clientsUpdateService.execute(user)).rejects.toEqual(
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

    await expect(clientsUpdateService.execute(user)).rejects.toEqual(
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

    await expect(clientsUpdateService.execute(user)).rejects.toEqual(
      new AppError("This email is already in use!")
    );
  });
});
