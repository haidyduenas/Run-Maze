var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

var celdas = new Array(mapa.length);
for (var i = 0; i < celdas.length; i++) {
	celdas[i] = new Array(mapa[0].length);
}

var celdaActual;

var laberinto = document.getElementById('map');
var tabla = document.createElement('table');


var izq = document.getElementById('izq');
var der = document.getElementById('der');
var avanzar = document.getElementById('avanzar');


for (var i = 0; i < mapa.length; i++) {
	var fila = document.createElement('tr');//filas
	for (var j = 0; j < mapa[i].length;j++)
	{
		var celda = document.createElement('td');
		if(mapa[i][j] == "*"){
	
				celda.setAttribute("class","negro");

		}
		if(mapa[i][j] == "o"){
	
				celda.style.backgroundColor = "green"
				var imagen = document.createElement("img"); //etiqueta de imagen
				imagen.src = "asset/img/arriba.png";
				celda.appendChild(imagen);

				celdaActual ={x:i,y:j,direccion:"arriba"}; // estamos dandole atributos al objeto celdaActual.
		}
		if(mapa[i][j] == "W"){
	
				celda.style.backgroundColor = "red";
		}
		fila.appendChild(celda);
		celdas[i][j] = celda;
	}
	tabla.appendChild(fila);
}

laberinto.appendChild(tabla);

der.onclick = function(){
	if(celdaActual.direccion == "arriba"){
		var imagen = document.createElement("img");
			imagen.src = "asset/img/derecha.png";
			celdaActual.direccion = "derecha";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
	}
	else if(celdaActual.direccion == "derecha"){
		var imagen = document.createElement("img");
			imagen.src = "asset/img/abajo.png";
			celdaActual.direccion = "abajo";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
	}
	else if(celdaActual.direccion == "abajo"){
		var imagen = document.createElement("img");
			imagen.src = "asset/img/izquierda.png";
			celdaActual.direccion = "izquierda";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
	}
	else if(celdaActual.direccion == "izquierda"){
		var imagen = document.createElement("img");
			imagen.src = "asset/img/arriba.png";
			celdaActual.direccion = "arriba";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
	}
}		

izq.onclick = function(){
	if(celdaActual.direccion == "arriba"){
		var imagen = document.createElement("img");
			imagen.src = "asset/img/izquierda.png";
			celdaActual.direccion = "izquierda";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
	}
	else if(celdaActual.direccion == "derecha"){
		var imagen = document.createElement("img");
			imagen.src = "asset/img/arriba.png";
			celdaActual.direccion = "arriba";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
	}
	else if(celdaActual.direccion == "abajo"){
		var imagen = document.createElement("img");
			imagen.src = "asset/img/derecha.png";
			celdaActual.direccion = "derecha";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
	}
	else if(celdaActual.direccion == "izquierda"){
		var imagen = document.createElement("img");
			imagen.src = "asset/img/abajo.png";
			celdaActual.direccion = "abajo";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
	}
	
}

avanzar.onclick = function(){
	if(celdaActual.direccion== "arriba"){ // Para evaluar a donde esta apuntando la flecha
		if(mapa[celdaActual.x-1][celdaActual.y] == "_" ){ //Para evaluar si no hay muro 
			var imagen = document.createElement("img");
			imagen.src = "asset/img/arriba.png";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdaActual.x = celdaActual.x-1;
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
		}
	}
	else if(celdaActual.direccion == "derecha"){
		if(mapa[celdaActual.x][celdaActual.y +1] == "_" ){ 
			var imagen = document.createElement("img"); //etiqueta de imagen
			imagen.src = "asset/img/derecha.png";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdaActual.y = celdaActual.y + 1;
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
		}
	}
	else if(celdaActual.direccion== "izquierda"){
		if(mapa[celdaActual.x][celdaActual.y - 1] == "_" ){ 
			var imagen = document.createElement("img"); //etiqueta de imagen
			imagen.src = "asset/img/izquierda.png";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdaActual.y = celdaActual.y - 1;
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
		}
	}
	else if(celdaActual.direccion=="abajo"){
		if(mapa[celdaActual.x + 1][celdaActual.y] == "_" ){ 
			var imagen = document.createElement("img"); //etiqueta de imagen
			imagen.src = "asset/img/abajo.png";
			celdas[celdaActual.x][celdaActual.y].removeChild(celdas[celdaActual.x][celdaActual.y].firstChild);
			celdaActual.x = celdaActual.x+1;
			celdas[celdaActual.x][celdaActual.y].appendChild(imagen);
		}
	}
	console.log(celdaActual.x +" - "+celdaActual.y + " - "+celdaActual.direccion)

}