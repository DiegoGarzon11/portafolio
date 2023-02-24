//capturando elementos
window.addEventListener('load', () => {
	let textoUser = document.getElementById('text-user'); //parrafo donde se ve el escrito del usuario
	let inputChat = document.getElementById('input-chat'); //input donde se envian los mensajes del chat
	let textoChat = document.getElementById('text-chat'); //parrafo donde se ve el escrito del chat
	const btnEnviar = document.getElementById('btn-enviar');

	let mensajesUser = [];
	let mensajesChat = [];

	let nombreUser;

	function mensajes(mensaje, response) {
		mensajesUser.push(mensaje);
		mensajesChat.push(response);

		localStorage.setItem('user_name', mensajesUser[0]);
		nombreUser = localStorage.getItem('user_name');

		if (mensajesUser.length <= 1) {
			textoChat.innerText = `Nice to meet you ${nombreUser}`;
		} else if (
			mensaje.includes('thank') ||
			mensaje.includes('gracias') ||
			mensaje.includes('agradecido')
		) {
			textoChat.innerText = "No problem , you're welcome";
		} else if (
			mensaje.includes('how are you') ||
			mensaje.includes('como esta') ||
			mensaje.includes('como vas')
		) {
			textoChat.innerText = " I'm great, can i help you in something?";
		} else if (
			mensaje.includes('age') ||
			mensaje.includes('años tiene diego') ||
			mensaje.includes('edad') ||
			mensaje.includes('old is diego')
		) {
			textoChat.innerText = `Sure, the answer to your question: ${inputChat.value} \n \n Diego is 21`;
		} else if (
			mensaje.includes('hobbies') ||
			mensaje.includes('pasatiempos') ||
			mensaje.includes('le gusta hacer a diego')
		) {
			textoChat.innerText = ` Sure, the answer to your question: ${inputChat.value} \n \n Diego likes to do a bit of everything, like playing, soccer, video games, reading, sports, studying, languages, listening to music, software development`;
		} else if (mensaje.includes('experiencia') || mensaje.includes('experience')) {
			textoChat.innerText = `Sure, the answer to your question: ${inputChat.value} \n \n Diego has 1+ years of experience in development`;
		} else if (
			mensaje.includes('skills') ||
			mensaje.includes('habilidades') ||
			mensaje.includes('conocimientos')
		) {
			textoChat.innerText = `Sure, the answer to your question: ${inputChat.value} \n \n Some of Diego' skills are javascript, typescript, angular, react, css, tailwind, astro, nodejs, express, jwt, mysql, APIs, c#, git/github, sequelize.
			Besides that he knows english`;
		} else if (
			mensaje.includes('vive') ||
			mensaje.includes('de donde es ') ||
			mensaje.includes('nacio')
		) {
			textoChat.innerText = `Sure, the answer to your question: ${inputChat.value} \n \n  Diego was born and raised in Chia, Colombia, since then he has been living there`;
		} else if (
			mensaje.includes('haces') ||
			mensaje.includes('what are you doing?') ||
			mensaje.includes('que haces')
		) {
			textoChat.innerText = `Sure, the answer to your question: ${inputChat.value} \n \n  i'm here for help you`;
		} else if (
			mensaje.includes('dedica diego') ||
			mensaje.includes('What does Diego ?') ||
			mensaje.includes('que hace diego')
		) {
			textoChat.innerText = `Sure, the answer to your question: ${inputChat.value} \n \n  Diego is web developer fullstack, He is a self-taught student and studies French as well. He is improving constantly his skills and is a person who likes practice several sports`;
		} else {
			textoChat.innerText =
				"Sorry, I don't have the answer right now, i hope help you as soon as possible :) ";
		}
		btnEnviar.disabled = true;
	}

	btnEnviar.addEventListener('click', (e) => {
		e.preventDefault();
		textoUser.innerText = inputChat.value;
		mensajes(inputChat.value.toLowerCase(), textoChat.innerText);
		inputChat.value = '';
	});
	inputChat.addEventListener('input', (e) => {
		e.target.value === '' ? (btnEnviar.disabled = true) : (btnEnviar.disabled = false);
	});
});
