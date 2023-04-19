const {Router} = require('express');
const router = Router();
const {Viaje, User, Driver} = require('../db');


router.post('/viaje', async (req, res) => {
	const {driverId, userId, estado, montoTotal, distancia, fecha} = req.body;

    const userExist = await User.findOne({
        where: {
          id: userId,
        },
      });

    const driverExist = await Driver.findOne({
        where: {
          id: driverId,
        },
      });

      if(userExist&&driverExist){

        try {
		
            const createTravel = await Viaje.create({
                driverId,
                userId,
                estado,
                montoTotal,
                distancia,
                fecha   
            });
    
            res.status(200).send(createTravel);
        } catch (error) {
            res.status(400).send({error: error.message});
        }
      }else{
        return alert("usuario o conductor invalido")
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