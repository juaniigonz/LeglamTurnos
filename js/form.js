let formulario = document.getElementById("formularioCotizacion");

    formulario.addEventListener("submit", (e) => {
	
	localStorage.setItem("nombreApellido" ,formulario.children[1].value)
	localStorage.setItem("telefono" ,formulario.children[3].value)
	localStorage.setItem("trabajoDeseado" ,formulario.children[5].value)

    e.preventdefalut();

    let nombreApellido = document.getElementById("nombreApellido").value;

    let telefono = document.getElementById("telefono").value;

    let trabajoDeseado = document.getElementById("trabajoDeseado").value;

	const cotizacion = { nombreApellido, telefono, trabajoDeseado};

	console.log(cotizacion);
	});
console.log(formulario);

// json


let formularioStorage = JSON.stringify(sessionStorage.getItem("formulario"))

console.log(formularioStorage);




