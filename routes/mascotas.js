const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');


router.get('/',async (req,res)=>{

    try{
        const mascotasArrayBD = await Mascota.find();
        res.render('mascotas',{
            mascotasArray: mascotasArrayBD,
            titulo: "Mascotas",
            desc: "Pagina de las Mascotas"
        });
        // console.log(mascotasArrayBD);
    }catch(err){
        console.log(err);
    }    
});

module.exports = router;