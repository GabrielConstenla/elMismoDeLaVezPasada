if( JSON.parse( localStorage.getItem( "estadoUsuario" ) ) == "deslogueado" ){

  var usuario = document.getElementById("usuario");
  usuario.style.visibility = "hidden";
}
else{
  var usuario = JSON.parse( localStorage.getItem( "usuarioLogueado" ) );


  var usuarioLogueado = document.getElementById( "usuarioLogueado" );

  usuarioLogueado.innerHTML= usuario;
  usuarioLogueado.style.color = "red";
}
// var usuario = JSON.parse( localStorage.getItem( "usuarioLogueado" ) );
//
//
// var usuarioLogueado = document.getElementById( "usuarioLogueado" );
//
// usuarioLogueado.innerHTML= usuario;
// usuarioLogueado.style.color = "red";
