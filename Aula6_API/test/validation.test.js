const Constants = require("../src/utils/constants");
const Validation = require("../src/utils/validation");

it("Caso válido", () => {
  const result = Validation.create({
    nome: "Divertida  Mente",
    diretor: "Pete Docter",
    genero: "Animação",
    ano: "2015",
  });
  expect(result).toEqual(undefined);
});

it("Caso inválido - sem o parâmetro nome e diretor", () => {
  const result = Validation.create({
    nome: "Divertida  Mente",
    genero: "Animação",
    ano: "2015",
  });
  expect(result.name).toEqual(Constants.ErrorValidation.name);
});
