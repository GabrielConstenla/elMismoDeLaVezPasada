

var testForm = document.getElementById('formOrden');


if( navigator.onLine ){

  var obtenerOrdenEnEspera = function( ){

    if( localStorage.getItem( "ordenEnEspera" ) == null ){

      testForm.onsubmit = function(event) {

        event.preventDefault();

        var request = new XMLHttpRequest();
        // POST to httpbin which returns the POST data as JSON
        request.open('POST', 'https://gascensoris.pythonanywhere.com/Orden/', /* async = */ true);

        // var form = document.getElementById('formOrden');
        // var formData = new FormData( form );

        var data = {};
        var formOrden = document.getElementById("formOrden")
        data.cliente = formOrden.cliente.value;
        data.fecha = formOrden.fecha.value;
        data.horaInicio = formOrden.horaInicio.value;
        data.horaTermino = formOrden.horaTermino.value;
        data.idAscensor = formOrden.idAscensor.value;
        data.modeloAscensor = formOrden.modeloAscensor.value;
        data.fallas = formOrden.fallas.value;
        data.reparaciones = formOrden.reparaciones.value;
        data.piezas = formOrden.piezas.value;
        data.tecnico = formOrden.tecnico.value;

        // var options = { content: formData };

        request.setRequestHeader('Content-type','application/json; charset=utf-8');
        request.send(JSON.stringify(data));

        // console.log(formData);
        // console.log(options);
        // console.log(JSON.stringify(formData));
        // console.log(JSON.stringify(options));
        // console.log(request.response);

        window.location.assign("index.html")

        console.log("Creando nueva orden...");
        alert("Creando nueva orden...");



      }

    }
    else {

      console.log("Recibiendo orden en espera...");
      alert("Recibiendo orden en espera...");

      var ordenEnEspera = JSON.parse( localStorage.getItem( "ordenEnEspera" ) );

      var localOrdenEnEspera = [];

      localOrdenEnEspera = ordenEnEspera.results;

      var testForm = document.getElementById('formOrden');

      var data = {};


      testForm.cliente.value = ordenEnEspera.cliente;
      testForm.fecha.value = ordenEnEspera.fecha;
      testForm.horaInicio.value = ordenEnEspera.horaInicio;
      testForm.horaTermino.value = ordenEnEspera.horaTermino;
      testForm.idAscensor.value = ordenEnEspera.idAscensor;
      testForm.modeloAscensor.value = ordenEnEspera.modeloAscensor;
      testForm.fallas.value = ordenEnEspera.fallas;
      testForm.reparaciones.value = ordenEnEspera.reparaciones;
      testForm.piezas.value = ordenEnEspera.piezas;
      testForm.tecnico.value = ordenEnEspera.tecnico;

      data.cliente = testForm.cliente.value
      data.fecha = testForm.fecha.value
      data.horaInicio = testForm.horaInicio.value
      data.horaTermino = testForm.horaTermino.value
      data.idAscensor = testForm.idAscensor.value
      data.modeloAscensor = testForm.modeloAscensor.value
      data.fallas = testForm.fallas.value
      data.reparaciones =  testForm.reparaciones.value
      data.piezas = testForm.piezas.value
      data.tecnico =  testForm.tecnico.value

    }

  }

  obtenerOrdenEnEspera();


} else {

  testForm.onsubmit = function(event) {

    event.preventDefault();

    var data = {};
    var formOrden = document.getElementById("formOrden")
    data.cliente = formOrden.cliente.value;
    data.fecha = formOrden.fecha.value;
    data.horaInicio = formOrden.horaInicio.value;
    data.horaTermino = formOrden.horaTermino.value;
    data.idAscensor = formOrden.idAscensor.value;
    data.modeloAscensor = formOrden.modeloAscensor.value;
    data.fallas = formOrden.fallas.value;
    data.reparaciones = formOrden.reparaciones.value;
    data.piezas = formOrden.piezas.value;
    data.tecnico = formOrden.tecnico.value;

    localStorage.setItem( "ordenEnEspera", JSON.stringify( data ) );

    alert( "Dejando orden en espera..." );

    window.location.assign("index.html")

  }

}


// if( navigator.onLine ){
//
//   testForm.onsubmit = function(event) {
//
//     event.preventDefault();
//
//     var request = new XMLHttpRequest();
//     // POST to httpbin which returns the POST data as JSON
//     request.open('POST', 'https://gascensoris.pythonanywhere.com/Orden/', /* async = */ true);
//
//     // var form = document.getElementById('formOrden');
//     // var formData = new FormData( form );
//
//     var obtenerOrdenEnEspera = function( ){
//
//       if( localStorage.getItem( "ordenEnEspera" ) == null ){
//
//         console.log("Creando nueva orden...");
//         alert("Creando nueva orden...");
//
//         var data = {};
//         var formOrden = document.getElementById("formOrden")
//         data.cliente = formOrden.cliente.value;
//         data.fecha = formOrden.fecha.value;
//         data.horaInicio = formOrden.horaInicio.value;
//         data.horaTermino = formOrden.horaTermino.value;
//         data.idAscensor = formOrden.idAscensor.value;
//         data.modeloAscensor = formOrden.modeloAscensor.value;
//         data.fallas = formOrden.fallas.value;
//         data.reparaciones = formOrden.reparaciones.value;
//         data.piezas = formOrden.piezas.value;
//         data.tecnico = formOrden.tecnico.value;
//
//       }
//       else {
//
//         console.log("Recibiendo orden en espera...");
//         alert("Recibiendo orden en espera...");
//
//         var ordenEnEspera = JSON.parse( localStorage.getItem( "ordenEnEspera" ) );
//
//         var localOrdenEnEspera = [];
//
//         localOrdenEnEspera = ordenEnEspera.results;
//
//         var testForm = document.getElementById('formOrden');
//
//         var data = {};
//
//
//         testForm.cliente.value = localOrdenEnEspera.cliente;
//         testForm.fecha.value = localOrdenEnEspera.fecha;
//         testForm.horaInicio.value = localOrdenEnEspera.horaInicio;
//         testForm.horaTermino.value = localOrdenEnEspera.horaTermino;
//         testForm.idAscensor.value = localOrdenEnEspera.idAscensor;
//         testForm.modeloAscensor.value = localOrdenEnEspera.modeloAscensor;
//         testForm.fallas.value = localOrdenEnEspera.fallas;
//         testForm.reparaciones.value = localOrdenEnEspera.reparaciones;
//         testForm.piezas.value = localOrdenEnEspera.piezas;
//         testForm.tecnico.value = localOrdenEnEspera.tecnico;
//
//         data.cliente = testForm.cliente.value
//         data.fecha = testForm.fecha.value
//         data.horaInicio = testForm.horaInicio.value
//         data.horaTermino = testForm.horaTermino.value
//         data.idAscensor = testForm.idAscensor.value
//         data.modeloAscensor = testForm.modeloAscensor.value
//         data.fallas = testForm.fallas.value
//         data.reparaciones =  testForm.reparaciones.value
//         data.piezas = testForm.piezas.value
//         data.tecnico =  testForm.tecnico.value
//
//       }
//
//     }
//
//     // var options = { content: formData };
//
//     request.setRequestHeader('Content-type','application/json; charset=utf-8');
//     request.send(JSON.stringify(data));
//
//     // console.log(formData);
//     // console.log(options);
//     // console.log(JSON.stringify(formData));
//     // console.log(JSON.stringify(options));
//     // console.log(request.response);
//
//     window.location.assign("index.html")
//   }
//
// } else {
//
//   testForm.onsubmit = function(event) {
//
//     event.preventDefault();
//
//     var data = {};
//     var formOrden = document.getElementById("formOrden")
//     data.cliente = formOrden.cliente.value;
//     data.fecha = formOrden.fecha.value;
//     data.horaInicio = formOrden.horaInicio.value;
//     data.horaTermino = formOrden.horaTermino.value;
//     data.idAscensor = formOrden.idAscensor.value;
//     data.modeloAscensor = formOrden.modeloAscensor.value;
//     data.fallas = formOrden.fallas.value;
//     data.reparaciones = formOrden.reparaciones.value;
//     data.piezas = formOrden.piezas.value;
//     data.tecnico = formOrden.tecnico.value;
//
//     localStorage.setItem( "ordenEnEspera", JSON.stringify( data ) );
//
//     alert( "Dejando orden en espera..." );
//
//     window.location.assign("index.html")
//
//   }
//
// }





// var testForm = document.getElementById('formOrden');
//
// testForm.onsubmit = function(event) {
//   event.preventDefault();
//
//   var request = new XMLHttpRequest();
//   // POST to httpbin which returns the POST data as JSON
//   request.open('POST', 'https://gascensoris.pythonanywhere.com/Orden/', /* async = */ true);
//
//   // var form = document.getElementById('formOrden');
//   // var formData = new FormData( form );
//
//   var data = {};
//   var formOrden = document.getElementById("formOrden")
//   data.cliente = formOrden.cliente.value;
//   data.fecha = formOrden.fecha.value;
//   data.horaInicio = formOrden.horaInicio.value;
//   data.horaTermino = formOrden.horaTermino.value;
//   data.idAscensor = formOrden.idAscensor.value;
//   data.modeloAscensor = formOrden.modeloAscensor.value;
//   data.fallas = formOrden.fallas.value;
//   data.reparaciones = formOrden.reparaciones.value;
//   data.piezas = formOrden.piezas.value;
//   data.tecnico = formOrden.tecnico.value;
//
//   // var options = { content: formData };
//
//   request.setRequestHeader('Content-type','application/json; charset=utf-8');
//   request.send(JSON.stringify(data));
//
//   // console.log(formData);
//   // console.log(options);
//   // console.log(JSON.stringify(formData));
//   // console.log(JSON.stringify(options));
//   // console.log(request.response);
//
//   window.location.assign("index.html")
// }
