var loginForm = document.getElementById("formLogin")

if ( navigator.onLine ){

	loginForm.onsubmit = function ( ){

		var xhttp = new XMLHttpRequest();
		var url = "https://gascensoris.pythonanywhere.com/Tecnico/?format=json";


		xhttp.onreadystatechange = function() {
				if( this.readyState == 4 && this.status == 200 ){
						// console.log( this.responseText );
						var data = JSON.parse( this.responseText );
						login( data.results );
						// console.log(data)
				}
		}
		xhttp.open( 'GET', url, true );
		xhttp.send();

		var login = function ( tecnicos ){

			var usuario = document.getElementById("inputUsuario");
			var password = document.getElementById("inputPassword")

			for ( let tecnico of tecnicos ){

				if( usuario.value === tecnico.email && password.value === tecnico.password ){
					alert("Credenciales correctas, iniciando sesión...");
					window.location.assign("listado.html");
					localStorage.setItem( 'usuarioLogueado', JSON.stringify( tecnico.nombre ) );
					localStorage.setItem( 'estadoUsuario', JSON.stringify( "logueado" ) );
				}
				else{
					// alert("Usuario o contraseña incorrectos...");
					window.location.assign("index.html");

				}

			}

		}

	}

} else {

	loginForm.onsubmit = function ( ) {

		var tecnicosLocal = JSON.parse( localStorage.getItem( "localTecnicosList" ) );

		var localTecnicosList = [];

		localTecnicosList = tecnicosLocal.results;

		var usuario = document.getElementById("inputUsuario");
		var password = document.getElementById("inputPassword")

		for( let tecnico of localTecnicosList ){

			if( usuario.value === tecnico.email && password.value === tecnico.password ){
				alert("Credenciales correctas, iniciando sesión...");
				window.location.assign(" listado.html ");
				localStorage.setItem( 'usuarioLogueado', JSON.stringify( tecnico.nombre ) );
				localStorage.setItem( 'estadoUsuario', JSON.stringify( "logueado" ) );
			}
			else{
				// alert("Usuario o contraseña incorrectos...");
				window.location.assign("index.html");

			}

		}

	}

}

	// loginForm.onsubmit = function ( ){
	//
	// 	var xhttp = new XMLHttpRequest();
	// 	var url = "https://gascensoris.pythonanywhere.com/Tecnico/?format=json";
	//
	//
	// 	xhttp.onreadystatechange = function() {
	// 			if( this.readyState == 4 && this.status == 200 ){
	// 					console.log( this.responseText );
	// 					var data = JSON.parse( this.responseText );
	// 					login( data.results );
	// 					console.log(data)
	// 			}
	// 	}
	// 	xhttp.open( 'GET', url, true );
	// 	xhttp.send();
	//
	// 	var login = function ( tecnicos ){
	//
	// 		var usuario = document.getElementById("inputUsuario");
	// 		var password = document.getElementById("inputPassword")
	//
	// 		for ( let tecnico of tecnicos ){
	//
	// 			if( usuario.value === tecnico.email && password.value === tecnico.password ){
	// 				alert("Credenciales correctas, iniciando sesión...");
	// 				window.location.assign("listado.html");
	// 				localStorage.setItem( 'usuarioLogueado', JSON.stringify( tecnico.nombre ) );
	// 				localStorage.setItem( 'estadoUsuario', JSON.stringify( "logueado" ) );
	// 			}
	// 			else{
	// 				// alert("Usuario o contraseña incorrectos...");
	// 				window.location.assign("index.html");
	//
	// 			}
	//
	// 		}
	//
	// 	}
	//
	// }
