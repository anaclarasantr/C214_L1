const create = {
  nome: {
      presence: {
          allowEmpty: false,
      },
      type: 'string',
  },
  diretor: {
      presence: {
          allowEmpty: false,
      },
      type: 'string',
  },
  genero: {
      presence: {
          allowEmpty: false,
      },
      type: 'string',
  },
  ano: {
      presence: {
          allowEmpty: false,
      },
      type: 'string',
  },
  
};

const update = {
  nome: {
      presence: {
          allowEmpty: false,
      },
      type: 'string',
  },
  genero: {
      presence: {
          allowEmpty: false,
      },
      type: 'string',
  },
};

const get = {
  genero: {
      presence: {
          allowEmpty: false,
      },
      type: 'string',
  },
};

const deleteBy = {
  nome: {
      presence: {
          allowEmpty: false,
      },
      type: 'string',
  },
};

module.exports = {
  update,
  create,
  get,
  deleteBy,
};