(function( ){

	var app = {
		datosTecnicos: [],
	}

	var loadData = function(key, label) {
	  var xhttp = new XMLHttpRequest();
	  var url = "http://127.0.0.1:8000/Tecnico/?format=json";

	  xhttp.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200){
				var data = JSON.parse( this.responseText );
				login( data.results );
				app.datosTecnicos = data.results;
				console.log(data)
			}
	  }
		xhttp.open("GET", url, true);
		xhttp.send();
	}


	var login = function( tecnicos ) {

        var usuario = document.getElementById("email")
        var password = document.getElementById("contraseña")

	    // var usuario2 = document.formclave.email.value;
	    // var password2 = document.formclave.contraseña.value
        console.log(usuario.value)

	    // console.log(usuario2);
	    // console.log(password2);

			for ( let tecnico of tecnicos ){
                console.log(tecnico)
				if(usuario.value === tecnico.email && password.value === tecnico.password){
                alert("Inicio de sesión exitoso");
		        // window.location.assign("orden.html");
		    }else{
		        alert("El email o la contraseña son incorrectos");
		        console.log("malo");
		        // window.location.assign("listado.html");
		    }

            }
            

	    // if(usuario.value === tecnicos.email && password.value === tecnicos.password){
	    //     alert("Inicio de sesión exitoso");
	    //     // window.location.assign("orden.html");
	    // }else{
	    //     alert("El email o la contraseña son incorrectos");
	    //     console.log("malo");
	    //     // window.location.assign("listado.html");
	    // }

	    // if(usuario2 === tecnico.email && password2 === tecnico.password){
	    //     alert("Inicio de sesión exitoso");
	    //     // window.location.assign("orden.html");
	    // }else{
	    //     alert("El email o la contraseña son incorrectos");
	    //     console.log("malo");
	    //     // window.location.assign("listado.html");
	    // }


	};

	loadData();
    login( app.datosTecnicos );
    
    // var formLogin = document.getElementById("formLogin");

    // formLogin.onsubmit = login();
    
    // document.getElementById("Login").onclick = login( );

    document.getElementById("Login").onclick = function() { login( ) };

}) ( );

// var loginForm = document.getElementById("formLogin")

// loginForm.onsubmit = function ( key , label){

// 	var xhttp = new XMLHttpRequest();
// 	var url = "http://127.0.0.1:8000/Tecnico/?format=json";


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

// 	var login = function ( tecnicos ){

// 		var usuario = document.getElementById("usuario");
//         var password = document.getElementById("password")
        

// 		for ( let tecnico of tecnicos ){

// 			if( usuario.value === tecnico.email && password.value === tecnico.password ){
// 				alert("Credenciales correctas, iniciando sesión...");
// 				window.location.assign("listado.html");
// 			}
// 			else{
// 				alert("usuario o contraseña incorrectos");
// 				window.location.assign("login.html");
// 			}

// 		}

// 	}

// }