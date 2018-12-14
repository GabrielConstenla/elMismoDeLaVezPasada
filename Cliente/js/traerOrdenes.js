(function(){

  var app = {
    ordenesList: [],
    localOrdenesList: [],
  }

  var cargarDatos = function(key, label){

    var xhttp = new XMLHttpRequest();
    var url = "https://gascensoris.pythonanywhere.com/Orden/?format=json";


    xhttp.onreadystatechange = function() {
        if( this.readyState == 4 && this.status == 200 ){
            // console.log( this.responseText );
            var data = JSON.parse( this.responseText );
            localStorage.setItem( "localOrdenesList", JSON.stringify( data ) );
            mostrarOrdenes( data.results );
            app.ordenesList = data.results;
            // console.log(data)
        }
    }
    xhttp.open( 'GET', url, true );
    xhttp.send();
  }

  var mostrarOrdenes = function( ordenes ){

    var ordenesContainer = document.getElementById( "ordenesContainer" );
    var usuario = JSON.parse( localStorage.getItem( "usuarioLogueado" ) );

    for ( let orden of ordenes ){

      if( usuario == orden.tecnico ){

        var ordenContainer = document.createElement("div");

        var folioContainer = document.createElement("p");
        var clienteContainer = document.createElement("p");
        var fechaContainer = document.createElement("p");
        var horaInicioContainer = document.createElement("p");
        var horaTerminoContainer = document.createElement("p");
        var idAscensorContainer = document.createElement("p");
        var modeloAscensorContainer = document.createElement("p");
        var fallasContainer = document.createElement("p");
        var reparacionesContainer = document.createElement("p");
        var piezasContainer = document.createElement("p");
        var tecnicoContainer = document.createElement("p");


        // console.log( tecnico )

        ordenContainer.className = "ordenContainer";

        folioContainer.innerHTML = "<b>Folio: </b>" + orden.folio;
        clienteContainer.innerHTML = "<b>Cliente: </b>" + orden.cliente;
        fechaContainer.innerHTML = "<b>Fecha: </b>" + orden.fecha;
        horaInicioContainer.innerHTML = "<b>HoraInicio: </b>" + orden.horaInicio;
        horaTerminoContainer.innerHTML = "<b>HoraTermino: </b>" + orden.horaTermino;
        idAscensorContainer.innerHTML = "<b>IdAscensor: </b>" + orden.idAscensor;
        modeloAscensorContainer.innerHTML = "<b>Orden: </b>" + orden.modeloAscensor;
        fallasContainer.innerHTML = "<b>Fallas: </b>" + orden.fallas;
        reparacionesContainer.innerHTML = "<b>Reparaciones: </b>" + orden.reparaciones;
        piezasContainer.innerHTML = "<b>Piezas: </b>" + orden.piezas;
        tecnicoContainer.innerHTML = "<b>Tecnico: </b>" + orden.tecnico;


        // Agrega los hijos
        ordenContainer.appendChild( folioContainer );
        ordenContainer.appendChild( clienteContainer );
        ordenContainer.appendChild( fechaContainer );
        ordenContainer.appendChild( horaInicioContainer );
        ordenContainer.appendChild( horaTerminoContainer );
        ordenContainer.appendChild( idAscensorContainer );
        ordenContainer.appendChild( modeloAscensorContainer );
        ordenContainer.appendChild( fallasContainer );
        ordenContainer.appendChild( reparacionesContainer );
        ordenContainer.appendChild( piezasContainer );
        ordenContainer.appendChild( tecnicoContainer );

        // Agrega contenedor al html
        ordenesContainer.appendChild( ordenContainer );

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

  if( navigator.onLine ){

    mostrarOrdenes( app.ordenesList );

    cargarDatos();
  }
  else{

    var ordenesLocal = JSON.parse( localStorage.getItem( "localOrdenesList" ) );

    app.localOrdenesList = ordenesLocal.results;

    mostrarOrdenes( app.localOrdenesList );

  }

})( );
