// function ValidarLogin(){
//
// 	var user = document.getElementById("user");
//     var pass = document.getElementById("password");
//
//     if (user.value == "admin"  && password.value == "adminexamen") {
//
//     	window.location.href = 'listado.html';
//         console.log("Sesión iniciada");
//
//     }
// }

var loginForm = document.getElementById("formLogin")

loginForm.onsubmit = function (){

	var xhttp = new XMLHttpRequest();
	var url = "http://127.0.0.1:8000/Tecnico/?format=json";


	xhttp.onreadystatechange = function() {
			if( this.readyState == 4 && this.status == 200 ){
					console.log( this.responseText );
					var data = JSON.parse( this.responseText );
					login( data.results );
					console.log(data)
			}
	}
	xhttp.open( 'GET', url, true );
	xhttp.send();

	var login = function ( tecnicos ){

		var usuario = document.getElementById("usuario");
		var password = document.getElementById("password")

		for ( let tecnico of tecnicos ){

			if( usuario === tecnico.email && password === tecnico.password ){
				alert("Credenciales correctas, iniciando sesión...");
				window.location.assign("listado.html");
			}
			else{
				alert("usuario o contraseña incorrectos");
				window.location.assign("login.html");
			}

		}

	}

}
