const Users = require("../src/application/user_service");
const Constants = require("../src/utils/constants");
const Utils = require("../src/utils/utils");
const UsersRepository = require("../src/port/user_repository");

jest.mock("../src/port/user_repository");

it('Caso válido', () => {
  const result = Validation.create({
      nome: "Frozen",
      diretor: "Chris Buck, Jennifer Lee",
      genero: "Fantasia",
      ano: "2013",
      duracao: "102 min"
  });
  expect(result).toEqual(undefined);
});



it("CREATE - Dado válido", async () => {
  const data = {
    nome: "Divertida  Mente",
    diretor: "Pete Docter",
    genero: "Animação",
    ano: "2015",
  };

  const id = Utils.generateUuid();

  UsersRepository.create.mockResolvedValue({ ...data, id });

  const result = await Users.create(data);
  expect(result).toEqual({ ...data, id });
});

it("CREATE - Dado duplicado", async () => {
  const data = {
    nome: "Divertida  Mente",
    diretor: "Pete Docter",
    genero: "Animação",
    ano: "2015",
  };

  const id = Utils.generateUuid();

  UsersRepository.create.mockResolvedValue({ code: 11000 });

  const result = await Users.create(data);
  expect(result).toEqual(Constants.ErrorDuplicate);
});