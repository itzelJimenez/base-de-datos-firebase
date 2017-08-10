var config = {
	    apiKey: "AIzaSyC4iNDo7et7ZsLzZeVrYF-gT2B_dMcFZhk",
	    authDomain: "proyectoivan-12c8b.firebaseapp.com",
	    databaseURL: "https://proyectoivan-12c8b.firebaseio.com",
	    projectId: "proyectoivan-12c8b",
	    storageBucket: "proyectoivan-12c8b.appspot.com",
	    messagingSenderId: "520874237482"
	  };

firebase.initializeApp(config);

var objDb = {
		usuarios: []
	};

var form = document.getElementById('crear-usuario');
form.addEventListener('submit', (e)=>{
	e.preventDefault();
	var nombre = document.getElementById('name').value;
	var correo = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	
	objDb.usuarios.push({
			name: nombre,
			email: correo,
			password: password
		})

	guardarDatos(objDb);
});

var guardarDatos =(usuarios)=>{
	database.ref("/").set(usuarios);

}

var mostrarUsuarios = (usuarios)=>{
	document.getElementById('usuarios').innerHTML = "";
	usuarios.forEach(function(usuario){
		var div = document.createElement('div');
		var h3 = document.createElement('h3');
		var p = document.createElement('p');

		h3.innerHTML =usuario.name;
		p.innerHTML = "<strong>Email:</strong>" + usuario.email;
		div.appendChild(h3);
		div.appendChild(p);
		document.getElementById('usuarios').appendChild(div);
	})
}


var database = firebase.database();


//Leer datos: Usar el método .on('value')

database.ref("/usuarios").on('value', (snapshot)=>{
	let usuarios = snapshot.val();
	objDb.usuarios = usuarios;
	mostrarUsuarios(usuarios);
});

