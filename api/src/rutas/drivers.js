const {Router} = require('express');
const router = Router();
const {User, Driver} = require('../db');
const {encrypt, compare} = require('../helpers/bcrypt');
const {tokenSign} = require('../helpers/generarToken');
const {mailUsuarioCreado} = require('../helpers/mailsService');

router.post('/registro', async (req, res) => {
	const {nombre, contraseña, correo} = req.body;

	try {
		const contraseñaHash = await encrypt(contraseña);
		const createUser = await User.create({
			nombre,
			contraseña: contraseñaHash,
			correo,
		});

		///// notificación por mail - usuario registrado

		const asunto = 'Bienvenid@ a Sora';

		const texto = `<p>Hola ${nombre}!<br><br>Estamos muy felices de recibirte en Sora!<br><br>A partir de ahora vas a poder usar nuestro servicio y viajar feliz y segura!<br><br>
						<br><br>Nos vemos!</p>`;

		mailUsuarioCreado(correo, asunto, texto);

		/////////

		res.status(200).send(createUser);
	} catch (error) {
		res.status(400).send({error: error.message});
	}
});

router.post('/login', async (req, res) => {
	const {correo, contraseña} = req.body;
console.log(correo, contraseña)
	try {
		const usuario = await User.findOne({
			where: {
				correo: correo,
			},
		});

		if (!usuario) {
			res.status(404).send({error: 'Usuario no encontrado'});
		}
		const checkContraseña = await compare(contraseña, usuario.contraseña);
		const tokenSesion = await tokenSign(usuario);
		if (checkContraseña) {
			res.status(200).send({usuario, tokenSesion});
		}
		if (!checkContraseña) {
			res.status(400).send({error: 'contraseña incorrecta'});
		}
	} catch (error) {
		res.status(400).send({error: 'contraseña incorrecta'});
	}
});

module.exports = router;
