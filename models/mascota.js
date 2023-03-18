const mongoose = require('mongoose');
const URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@clusteraminadad.j8lmrfp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

//Coneccion a bd
main();

async function main(){
try{
  await mongoose.connect(URI);
  await console.log('Coneccion establecida');
}catch(err){
    console.log(err);
}
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
});

const Mascota = mongoose.model('Mascota',mascotaSchema);

module.exports = Mascota;