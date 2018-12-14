var usuario = JSON.parse( localStorage.getItem( "usuarioLogueado" ) );

var formOrden = document.getElementById( "formOrden" );

formOrden.tecnico.value = usuario;

var cargarDatos = function(key, label){

  var xhttp = new XMLHttpRequest();
  var url = "https://gascensoris.pythonanywhere.com/Tecnico/?format=json";


  xhttp.onreadystatechange = function() {
      if( this.readyState == 4 && this.status == 200 ){
          // console.log( this.responseText );
          var data = JSON.parse( this.responseText );
          obtenerClientes( data.results );
          // console.log(data)
      }
  }
  xhttp.open( 'GET', url, true );
  xhttp.send();
}

function obtenerClientes( tecnicos ){

  var selectClientes = document.getElementById( "cliente" );

  var usuario = JSON.parse( localStorage.getItem( "usuarioLogueado" ) );

    for( let tecnico of tecnicos ){

      if ( usuario == tecnico.nombre ){

        for( let i in tecnico.cliente ){
          let option = document.createElement("option");
          option.innerHTML = tecnico.cliente[i];
          selectClientes.appendChild(option);
        }

      }

    }

}

cargarDatos();
