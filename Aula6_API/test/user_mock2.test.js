const { UserModel } = require("../src/infrastructure/database");
const user = require("../src/port/user_repository");

describe("create", () => {
  it("Valid User", async () => {
    UserModel.prototype.save = jest.fn().mockImplementation(() => ({
      toObject: () => ({
        id: 1,
        nome: "Divertida  Mente",
        diretor: "Pete Docter",
        genero: "Animação",
        ano: "2015",
      }),
    }));

    expect(
      await user.create({
        id: 1,
        nome: "Divertida  Mente",
        diretor: "Pete Docter",
        genero: "Animação",
        ano: "2015",
      })
    ).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        nome: expect.any(String),
        diretor: expect.any(String),
        genero: expect.any(String),
        ano: expect.any(String),
      })
    );
  });
});
