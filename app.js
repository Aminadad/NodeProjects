const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

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


