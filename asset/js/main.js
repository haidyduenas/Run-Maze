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

var laberinto = document.getElementById('map');
var tabla = document.createElement('table');
tabla.border = "1";
for (var i = 0; i < mapa.length; i++) {
	var fila = document.createElement('tr');//filas
	for (var j = 0; j < mapa[i].length;j++)
	{
		var celda = document.createElement('td');
		if(mapa[i][j] == "*"){
	
				celda.setAttribute("class","negro");
		}
		fila.appendChild(celda);
	}
	tabla.appendChild(fila);
	console.log(tabla);
}

laberinto.appendChild(tabla);

