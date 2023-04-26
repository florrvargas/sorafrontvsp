const {Router} = require('express');
const router = Router();
const {Viaje, User, Driver} = require('../db');


router.post('/viaje', async (req, res) => {
  
  //agreagr fecha

	const {userCorreo, estado, montoTotal, distancia, fecha} = req.body;

    const userExist = await User.findOne({
        where: {
          correo: userCorreo,
        },
      });   

        try {
		
            const createTravel = await Viaje.create({
              userCorreo,
              estado,
              montoTotal,
              distancia,
              fecha,
              estado: "en espera"   
            });
    
            res.status(200).send(createTravel, console.log("viaje creado"));
        } catch (error) {
            res.status(400).send({error: error.message});
        }
      

});

router.get("/viajes", async (req, res) => {
	try {
		const viajes = await Viaje.findAll();
		if (!viajes.length) {
		res.status(400).send({ error: "No se encontraron viajes" });
		} else {
		res.status(200).send(viajes);
		}
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
	});


    module.exports = router;