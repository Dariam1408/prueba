
$("#Entrada").click(function() {
	var us = document.getElementById('USUARIO').value;
	var pass = document.getElementById('PASSWORD').value;

	if (USUARIO =="China" && PASSWORD=="1408"){
		//body...alert("que saviduria mas cosmica");
		inicio();

	}
    else{ 
         alert(" contraseña o usuario incorrecto."); 
    } 
});
function inicio(){
	window.location = "./pages/inicio.html";
}

function redireccionar(url){
	window.location = url;
}

window.addEventListener('load',function(){
	$("section").show(02);
});


