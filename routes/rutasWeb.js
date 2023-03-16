
const express = require('express');
const router = express.Router();
let d = ['Lunes','Martes','Miercoles','Jueves','Viernes'];

//rutas
router.get('/',(req,res)=>{
    res.render('index',{
        titulo: "Inicio",
        desc: "Pagina de Inicio",
        dias: d,
        btn: async ()=>{
            try{
                await d.sort();
                await console.log("Hola Click");
            }catch(err){
                console.log(err);
            }
        }
    });
});
 router.get('/nosotros',(req,res)=>{
    res.render('nosotros',{
        titulo: "Nosotros",
        desc: "Pagina de nosotros",

        datos: {
            nombre: "Fegonza",
            descripcion: "Pagina Web de practico sobre nosotros"
        }
       
    });
 });
 router.get('/servicios',(req,res)=>{
    res.render('nosotros',{
        titulo: "Servicios",
        desc: "Aqui Nuestros Servicios",

        datos: {
            nombre: "Fegonza",
            descripcion: "Pagina Web practica sobre nuestros servicios"
        }
       
    });
 });
 router.get('/login',(req,res)=>{
    res.render('login',{
        titulo: "Login",
        desc: "Iicia Secion Aqui",

        datos: {
            nombre: "Fegonza",
            descripcion: "Pagina Web de practico sobre nosotros"
        }
       
    });
 });
 router.get('/mascotas/new',(req,res)=>{
    res.render('new',{
        titulo: "New Mascota",
        desc: "Registar una nueva mascota",

        datos: {
            nombre: "Fegonza",
            descripcion: "Pagina Web de practico sobre nosotros"
        }
       
    });
 });
 module.exports = router;