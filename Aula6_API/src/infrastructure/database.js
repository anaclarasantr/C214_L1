const mongoose = require('mongoose');

const uri = `mongodb+srv://naclarasantr:<password>@c215lab.464disz.mongodb.net/test`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: {
        type: String,
        unique: true,
    },
    diretor: String,
    genero: String,
    ano: String,
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {UserModel,};