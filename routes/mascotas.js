const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('mascotas',{
        mascotasArray: [
            {id:"d1", nombre: "Doguy", desc: "Mi Mascota Goguy"},
            {id:"d2", nombre: "Puchoguy", desc: "Mi Mascota Puchoguy"},
            {id:"d3", nombre: "Cpitan", desc: "Mi Mascota Capitan"},
            {id:"d4", nombre: "Puchunga", desc: "Mi Mascota Puchunga"}
        ],
        titulo: "Mascotas",
        desc: "Pagina de las Mascotas"
    })
})



module.exports = router;