import nodemailer from 'nodemailer';

const enviarEmail = async (datos) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		port: 587,
		auth: {
			user: 'santicua2000@gmail.com',
			pass: 'rwdkwvgrzekcvbme'
		}
})
	const email = {
  	from: 'Servidor Node.js',
  	to: `${datos.email}`,
  	subject: 'Informacion de cuenta creada con exito',
  	html: '<h1>Usuario creado con exito!<h1><br><h2>Informacion de usuario<h2><h4>Nombre:'+datos.name+'<h4><br><h4>Edad: '+datos.age+'<h4><br><h4>Direccion:'+datos.direction+'<h4><br><h4>Telefono:'+datos.telephone+'<h4>',
	}

	try {
 		await transporter.sendMail(email);
	} catch (error) {
		console.log(error)
	}
}

export { enviarEmail };
