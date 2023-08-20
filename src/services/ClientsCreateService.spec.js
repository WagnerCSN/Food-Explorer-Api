const ClientsCreateService = require("./ClientsCreateService");
const ClientsRepositoryInMemory = require("../repositories/ClientsRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("UserCreateService", () => {
  let clientsRepositoryInMemory = null;
  let clientsCreateService = null;
  let user = {};
  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory();
    clientsCreateService = new ClientsCreateService(clientsRepositoryInMemory);
    user = {
      name: "teste",
      email: "teste@gmail.com",
      password: "123",
    };
  });

  it("user should be create", async () => {
    const userCreated = await clientsCreateService.execute(user);
    expect(userCreated).toHaveProperty("id");
  });

  it("user not should be create with exists email", async () => {
    const user2 = {
      name: "user2",
      email: "teste@gmail.com",
      password: "123",
    };
    await clientsCreateService.execute(user);
    await expect(clientsCreateService.execute(user2)).rejects.toEqual(
      new AppError("Email not allowed")
    );
  });

  it("user not should be create with exists name", async () => {
    const user2 = {
      name: "teste",
      email: "user2@gmail.com",
      password: "123",
    };
    await clientsCreateService.execute(user);
    await expect(clientsCreateService.execute(user2)).rejects.toEqual(
      new AppError("User already exists!")
    );
  });
});
