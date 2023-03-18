const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
});
const URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@clusteraminadad.j8lmrfp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(URI);
const Mascota = mongoose.model('Mascota',mascotaSchema);

module.exports = Mascota;