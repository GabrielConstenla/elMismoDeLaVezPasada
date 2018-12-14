var logout = document.getElementById( "logout" );

logout.addEventListener( "click", function( mouse ){
  var usuario = document.getElementById( "usuario" );

  if( !this.selected ){
    // usuario.classname = "usuario hidden";
    usuario.style.visibility = "hidden";
    this.selected = true;
    localStorage.setItem( 'estadoUsuario', JSON.stringify("deslogueado") );
    window.location.assign("index.html")
  }
  // }else {
  //   // usuario.classname = "usuario";
  //   usuario.style.visibility = "visible";
  // }

});
