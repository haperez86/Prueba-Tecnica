
document.querySelector('#tabs-1').addEventListener('click', datos());



function datos(){

	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', 'data-1.json', true);

	xhttp.send();

	xhttp.onreadystatechange = function() {

		 if (this.readyState === 4 && this.status == "200") {

		 	let datos = JSON.parse(this.responseText);
			let res = document.querySelector ('#tabs-1');
			let ciudad = document.querySelector ('#selectCiudad');
			let tipo = document.querySelector('#selectTipo');

			var ciudadesUnicas = eliminarObjetosDuplicados(datos, 'Ciudad');
			var tipoUnicos = eliminarObjetosDuplicados(datos, 'Tipo');

			res.innerHTML = '';

		 	for(let item of datos)
		 	{
		 		res.innerHTML += 
		 		`
		 			<img src="img/home.jpg" alt="home">
		 			<li>
			 			${"Dirección: "+item.Direccion}
			 			${"Ciudad: "+item.Ciudad}
			 			${"Teléfono: "+item.Telefono}
			 			${"Código Postal: "+item.Codigo_Postal}
			 			${"Precio: "+item.Precio}
		 			</li>

		 		`
		 	}	


		 	for(let ciudades of ciudadesUnicas){

		 		ciudad.innerHTML += `
		 			<option value="" selected>${ciudades.Ciudad}</option>
		 		`
		 	}

		 	for(let tipos of tipoUnicos ){

		 		tipo.innerHTML += `
		 			<option value="" selected>${tipos.Tipo}</option>
		 		`
		 	}

		 	const submit = document.querySelector('#submitButton');

		 	submit.addEventListener('click', function(){
		 		let selectorCiudad = document.getElementById('selectCiudad').value;
		 		let selectorTipo = document.getElementById('selectTipo').value;

		 		console.log(`${selectorCiudad} ${selectorTipo}`);
		 	});


		}


		function eliminarObjetosDuplicados(arr, prop) {
		     var nuevoArray = [];
		     var lookup  = {};
		 
		     for (var i in arr) {
		         lookup[arr[i][prop]] = arr[i];
		     }
		 
		     for (i in lookup) {
		         nuevoArray.push(lookup[i]);
		     }
		 
		     return nuevoArray;
		}

	}

}

