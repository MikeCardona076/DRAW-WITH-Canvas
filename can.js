//aqui empieza la otra parte
var texto=document.getElementById("textmike");
var boton=document.getElementById("botonmike");

boton.addEventListener("click", dibujomike);

var d= document.getElementById("mike");
var lienzo= d.getContext("2d");
console.log(lienzo);




function dibujomike()
{
var xxx= parseInt(texto.value);
var lineas= xxx;
var l =0;

var ys, xf;
var lxf,lys;
var xr, yt;
//1
for(l=0; l<lineas; l++ )
{
	ys= 10 * l;
	xf= 10 * (l + 1);
 
	lol("green", 0, ys, xf, 1000);
	console.log("linea "+ l);
	
}
//2

for(l=0; l<lineas; l++ )
{
	ys= 10 * l;
	xf= 10 * (l + 1);
 
	lol("blue", ys, 0, 1000, xf);
	console.log("linea "+ l);
	
}

for(l=0; l<lineas; l++ )
{
	ys= 10 * l;
	xf= 10 * (l + 1);
   	xr= 10 * l;
	yt= 10 * (l + 1);

 lxf=1000 - xr;
 lys=1000 - yt;
	lol("red", xf, 1000, 1000, lys);
	console.log("linea "+ l);
	
}

for(l=0; l<lineas; l++ )
{
	ys= 10 * l;
	xf= 10 * (l + 1);
   	xr= 10 * l;
	yt= 10 * (l + 1);

 lxf=1000 - xr;
 lys=1000 - yt;
	lol("brown", 0, ys, lxf, 0);
	console.log("linea "+ l);
	
}


function lol(color, x, y, xt, yt)
{

lienzo.beginPath();
lienzo.strokeStyle=color;
lienzo.moveTo(x, y);
lienzo.lineTo(xt, yt);
lienzo.stroke();
lienzo.closePath();

}

console.log(texto);
}