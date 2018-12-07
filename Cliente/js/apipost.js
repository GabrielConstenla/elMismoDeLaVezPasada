(function(){


// $(document).ready(function () {
//       $("#formOrden").click(function (e) {
//           var MyForm = JSON.stringify($("#formOrden").serializeJSON());
//           console.log(MyForm);
//           $.ajax(
//               {
//                   url: "http://127.0.0.1:8000/Orden/",
//                   type: "POST",
//                   data: MyForm,
//               });
//           e.preventDefault(); //STOP default action
//       });
//   });
// -----------------------------------------------------------------------------------------------
// window.addEventListener("load", function () {
//   function sendData() {
//     var XHR = new XMLHttpRequest();
//
//     // Bind the FormData object and the form element
//     var FD = new FormData(form);
//
//     // Define what happens on successful data submission
//     XHR.addEventListener("load", function(event) {
//       alert(event.target.responseText);
//     });
//
//     // Define what happens in case of error
//     XHR.addEventListener("error", function(event) {
//       alert('Oops! Something went wrong.');
//     });
//
//     // Set up our request
//     XHR.open("POST", "http://127.0.0.1:8000/Orden/");
//
//     // The data sent is what the user provided in the form
//     XHR.send(FD);
//   }
//
//   // Access the form element...
//   var form = document.getElementById("formOrden");
//
//   // ...and take over its submit event.
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
//
//     sendData();
//   });
// });

// $("#formOrden").submit(function () {
//        var jqxhr = $.post('http://127.0.0.1:8000/Orden/', $('#formOrden').serialize())
//            .success(function () {
//                var loc = jqxhr.getResponseHeader('Location');
//                var a = $('<a/>', { href: loc, text: loc });
//                $('#message').html(a);
//            })
//            .error(function () {
//                $('#message').html("Error posting the update.");
//            });
//        return false;
//    });

  // function EnviarDatos( ){
  //     var xhr = new XMLHttpRequest();
  //     var url = "http://127.0.0.1:8000/Orden/";
  //
  //     var data = new FormData( form );
  //     var form = document.getElementById("formOrden")
  //
  //     var xhr = new XMLHttpRequest();
  //     xhr.open("POST", url, true);
  //     xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  //     xhr.onload = function () {
  //         var ordenes = JSON.parse(xhr.responseText);
  //         if (xhr.readyState == 4 && xhr.status == 200) {
  //             console.table(ordenes);
  //         } else {
  //             console.error(ordenes);
  //         }
  //     }
  //     xhr.send(JSON.stringify(data));
  //     location.reload();
  // }


      // const url = "http://127.0.0.1:8000/Orden/";
      // fetch(url, {
      //     method : "POST",
      //     body: new FormData(document.getElementById("formOrden")),
      //     // -- or --
      //     // body : JSON.stringify({
      //         // user : document.getElementById('user').value,
      //         // ...
      //     // })
      // }).then(
      //     response => response.text() // .json(), etc.
      //     // same as function(response) {return response.text();}
      // ).then(
      //     html => console.log(html)
      // );

      // ---------------------------------------------------------------------------------------

      // var url = "http://127.0.0.1:8000/Orden/";

      // var data = {};
      // data.cliente = document.formOrden.Cliente.value;
      // data.fecha = document.formOrden.Fecha.value;
      // data.horaInicio = document.formOrden.HoraInicio.value;
      // data.horaTermino = document.formOrden.HoraTermino.value;
      // data.idAscensor = document.formOrden.IdAscensor.value;
      // data.modeloAscensor = document.formOrden.ModeloAscensor.value;
      // data.fallas = document.formOrden.Fallas.value;
      // data.reparaciones = document.formOrden.Reparaciones.value;
      // data.piezas = document.formOrden.Piezas.value;
      // data.tecnico = document.formOrden.Tecnico.value;

      // var url = "http://127.0.0.1:8000/Orden/";
      // var data = new formData( form )
      // form = document.getElementById("formOrden")
      //
      // var json = JSON.stringify( data );
      //
      // var xhr = new XMLHttpRequest();
      //
      // xhr.open("POST", url, true);
      // xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
      // xhr.onload = function () {
      // 	var ordenes = JSON.parse(xhr.responseText);
      //   console.log( ordenes )
      // 	if (xhr.readyState == 4 && xhr.status == "201") {
      // 		console.table( ordenes );
      // 	} else {
      // 		console.error( ordenes );
      // 	}
      // }
      // xhr.send(json);

      // var enviarDatos = function(key, label){
      //   var xhttp = new XMLHttpRequest();
      //   var url = "http://127.0.0.1:8000/Orden/";
      //   form = document.getElementById("formOrden");
      //   var data = new formData( form );
      //
      //
      //   var json = JSON.stringify( data );
      //
      //   xhttp.onreadystatechange = function() {
      //     if( this.readyState == 4 && this.status == 200 ){
      //       console.log( this.responseText );
      //       var ordenes = JSON.parse( this.responseText );
      //     }
      //   }
      //   xhttp.open( 'POST', url, true );
      //   xhttp.send();
      // }

      // var form = document.getElementById('formOrden');
      // form.onsubmit = function(event) {
      //   event.preventDefault();
      //
      //   var request = new XMLHttpRequest();
      //   // POST to httpbin which returns the POST data as JSON
      //   request.open('POST', 'http://127.0.0.1:8000/Orden/', /* async = */ false);
      //
      //   var formData = new FormData(document.getElementById('formOrden'));
      //   request.send(formData);
      //
      //   console.log(request.response);
      // }

  // }
}) ( );
