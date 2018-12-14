if( JSON.parse( localStorage.getItem( "estadoUsuario" ) ) == "deslogueado" ){

  var usuario = document.getElementById( "usuario" );

  var menuLogin = document.getElementById( "menuLogin" );

  usuario.style.visibility = "hidden";

  menuLogin.setAttribute("href", "login.html");
}
else{
  var usuario = JSON.parse( localStorage.getItem( "usuarioLogueado" ) );

  var usuarioLogueado = document.getElementById( "usuarioLogueado" );

  var menuLogin = document.getElementById( "menuLogin" );

  usuarioLogueado.innerHTML= usuario;
  usuarioLogueado.style.color = "red";
  
  menuLogin.setAttribute("href", "listado.html");
}
// var usuario = JSON.parse( localStorage.getItem( "usuarioLogueado" ) );
//
//
// var usuarioLogueado = document.getElementById( "usuarioLogueado" );
//
// usuarioLogueado.innerHTML= usuario;
// usuarioLogueado.style.color = "red";
