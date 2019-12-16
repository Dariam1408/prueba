this.logueado = false;

$("#entrada").click(function(){
	if ($("#USUARIO").val() == "China" && $("#PASSWORD").val() == '1408'){
		logueado = true;
		if (logueado == true) {
			window.location = "pages/inicio.html"
		}
	}else {
		Swal.fire (' contraseña erronea');  
	}
});

window.addEventListener('load',function(){
	$('.container').fadeIn(2000);
});