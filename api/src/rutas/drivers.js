const {Router} = require('express');
const router = Router();
const {Driver} = require('../db');
const {encrypt, compare} = require('../helpers/bcrypt');
const {mailUsuarioCreado} = require('../helpers/mailsService');

router.post('/registro', async (req, res) => {
	const {nombre, contraseña, correo} = req.body;

	try {
		const contraseñaHash = await encrypt(contraseña);
		const createDriver = await Driver.create({
			nombre,
			contraseña: contraseñaHash,
			correo,
		});

		///// notificación por mail - usuario registrado

		const asunto = 'Bienvenida a Sora';

		const texto = `<p>Hola ${nombre}!<br><br>Estamos muy felices de recibirte en Sora!<br><br>A partir de ahora vas a poder usar nuestro servicio y viajar feliz y segura!<br><br>
						<br><br>Nos vemos!</p>`;

		mailUsuarioCreado(correo, asunto, texto);

		/////////

		res.status(200).send(createDriver);
	} catch (error) {
		res.status(400).send({error: error.message});
	}
});

router.post('/login', async (req, res) => {
	const {correo, contraseña} = req.body;
console.log(correo, contraseña)
	try {
		const driver = await Driver.findOne({
			where: {
				correo: correo,
			},
		});

		if (!driver) {
			res.status(404).send({error: 'Conductora no encontrada'});
		}
		const checkContraseña = await compare(contraseña, driver.contraseña);
		if (checkContraseña) {
			res.status(200).send({driver});
		}
		if (!checkContraseña) {
			res.status(400).send({error: 'contraseña incorrecta'});
		}
	} catch (error) {
		res.status(400).send({error: 'contraseña incorrecta'});
	}
});

	router.get("/conductoras", async (req, res) => {
		try {
			const drivers = await Driver.findAll();
			if (!drivers.length) {
			res.status(400).send({ error: "No se encontraron conductoras" });
			} else {
			res.status(200).send(drivers);
			}
		} catch (error) {
			res.status(400).send({ error: error.message });
		}
		});

module.exports = router;
