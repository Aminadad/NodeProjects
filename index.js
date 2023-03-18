const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

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
app.set('view engine','hbs');
app.set('views',__dirname + '/views');

app.use(express.static(__dirname + '/public'));

//RUTAS MIDDLEWARE
app.use('/', require('./routes/rutasWeb'));
app.use('/mascotas', require('./routes/mascotas'));
// app.use('/servicios', require('./routes/rutasWeb'));

//MIDDLEWARE DE ERROR
app.use((req,res,next)=>{
        res.status(404).render('404',{
            titulo: "Not Found",
            desc: "Pagina fuera de alcance"
        });
    });


app.listen(port,()=>{console.log(`Corriendo ahora en http://localhost:${port}`)});


