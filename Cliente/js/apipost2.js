var testForm = document.getElementById('formOrden');

testForm.onsubmit = function(event) {
  event.preventDefault();

  var request = new XMLHttpRequest();
  // POST to httpbin which returns the POST data as JSON
  request.open('POST', 'http://127.0.0.1:8000/Orden/', /* async = */ true);

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
  console.log(request.response);

  window.location.assign("index.html")
}
