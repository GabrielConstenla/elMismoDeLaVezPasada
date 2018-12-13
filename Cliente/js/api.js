(function(){

  var app = {
    tecnicosList: [],
  }

  var cargarDatos = function(key, label){

    var xhttp = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/Tecnico/?format=json";


    xhttp.onreadystatechange = function() {
        if( this.readyState == 4 && this.status == 200 ){
            console.log( this.responseText );
            var data = JSON.parse( this.responseText );
            mostrarTecnicos( data.results );
            app.tecnicosList = data.results;
            console.log(data)
        }
    }
    xhttp.open( 'GET', url, true );
    xhttp.send();
  }

  var mostrarTecnicos = function( tecnicos ){

    var tecnicosContainer = document.getElementById( "tecnicosContainer" );
    var usuario = JSON.parse( localStorage.getItem( "usuarioLogueado" ) );

    for ( let tecnico of tecnicos ){

      if( usuario == tecnico.nombre ){

        var tecnicoContainer = document.createElement("div");
        var nombreContainer = document.createElement("h3");
        var clientesContainer = document.createElement("p");
        var btnOrden = document.createElement("button");

        console.log( tecnico )

        tecnicoContainer.className = "tecnicoContainer"
        nombreContainer.innerHTML = tecnico.nombre;
        clientesContainer.innerHTML = "<b>Clientes :</b>" + tecnico.cliente;
        btnOrden.innerHTML = "Iniciar Orden";
        btnOrden.href = "orden.html"

        // Agrega los hijos
        tecnicoContainer.appendChild( nombreContainer );
        tecnicoContainer.appendChild( clientesContainer );
        clientesContainer.appendChild( btnOrden );

        // Agrega contenedor al html
        tecnicosContainer.appendChild( tecnicoContainer );

      }
        // var tecnicoContainer = document.createElement("div");
        // var nombreContainer = document.createElement("h3");
        // var clientesContainer = document.createElement("p");
        // var btnOrden = document.createElement("button");
        //
        // console.log( tecnico )
        //
        // tecnicoContainer.className = "tecnicoContainer"
        // nombreContainer.innerHTML = tecnico.nombre;
        // clientesContainer.innerHTML = "<b>Clientes :</b>" + tecnico.cliente;
        // btnOrden.innerHTML = "Iniciar Orden";
        // btnOrden.href = "orden.html"
        //
        // // Agrega los hijos
        // tecnicoContainer.appendChild( nombreContainer );
        // tecnicoContainer.appendChild( clientesContainer );
        // clientesContainer.appendChild( btnOrden );
        //
        // // Agrega contenedor al html
        // tecnicosContainer.appendChild( tecnicoContainer );

    }

  }

  cargarDatos();

  mostrarTecnicos( app.tecnicosList );

})( );
