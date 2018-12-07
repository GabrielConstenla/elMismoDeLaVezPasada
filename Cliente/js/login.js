function ValidarLogin(){

	var user = document.getElementById("user");
    var pass = document.getElementById("password");

    if (user.value == "admin"  && password.value == "adminexamen") {

    	window.location.href = 'listado.html';
        console.log("Sesión iniciada");

    }
}
