var centesimas = 0;
var segundos = 60;
var minutos = 1;
var horas = 0;
var control;
function inicio () {
	control = setInterval(cronometro,10);
}
function parar () {
	clearInterval(control);
	
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 60;
	minutos = 1;
	horas = 0;
	timer.innerHTML = "02:00";
}

function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		//Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos --;
		if (segundos < 10) { segundos = "0"+segundos }
        //Segundos.innerHTML = ":"+segundos;
        timer.innerHTML = minutos+":"+segundos;
	}
	if((centesimas == 0)&&(segundos == 0 )&&(minutos==0)){
		reinicio();
		finalizarJuego();
	}
	if ((centesimas == 0)&&(segundos == 0)) {
		//segundos = "0"+segundos;
		if (minutos < 10) { minutos = "0"+minutos }
        //Minutos.innerHTML = ":"+minutos;
		timer.innerHTML = minutos+":"+segundos;
		minutos--;
		segundos = 60;
	}
	
	/*if (segundos == 0) {
		segundos = 60;
	}*/
	/*if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
        //Segundos.innerHTML = ":"+segundos;
        timer.innerHTML = minutos+":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
        //Minutos.innerHTML = ":"+minutos;
        timer.innerHTML = minutos+":"+segundos;
	}*/
	/*if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		//Horas.innerHTML = horas;
    }*/
    
}