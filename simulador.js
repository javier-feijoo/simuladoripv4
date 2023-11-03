const byte1 = [0, 0, 0, 0, 0, 0, 0, 0];

//Función para controlar pulsaciones bits IP
function tdclick(element) {
    valor = document.getElementById(element).innerHTML;
    nombreMascara = "m" + element.slice(1, 3);
    mascaraValor = document.getElementById(nombreMascara).innerHTML;
    if (mascaraValor == 0) {
        if (valor == 1) {
            document.getElementById(element).innerHTML = 0;
            document.getElementById(element).className = "bit inactiva";
        } else {
            document.getElementById(element).innerHTML = 1;
            document.getElementById(element).className = "bit activa";
        }
        nombreByte = element.slice(0, 2);
        actualizarByte(nombreByte);
    }
}

//función para actualizar el valor decimal del byte
function actualizarByte(nombreByte) {
    resultado = 0;
    for (var i = 8; i > 0; i--) {
        nombre = nombreByte + i;
        valor = document.getElementById(nombre).innerHTML;
        if (valor == 1) {
            resultado += Math.pow(2, 8 - i);
        }
    }
    document.getElementById(nombreByte).innerHTML = resultado;
}

//Función controla boton y visualización ayuda numérica calculo byte
function activaAyuda(boton) {
    var x = document.getElementById("ayudaValores");
    var valor = x.style.display;
    if (valor === "none") {
        x.style.display = "table-row";
        document.getElementById(boton).innerHTML = "AYUDA OFF";
        document.getElementById(boton).className = "btn btn-sucess";
    } else {
        x.style.display = "none";
        document.getElementById(boton).innerHTML = "AYUDA ON";
        document.getElementById(boton).className = "btn btn-sucess";
    }
}

//Función para el control de la máscara al pulsar coloca 1 hacia la izquierda
function msclick(element) {
    posMascara = element.slice(1, 3);
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 8; j++) {
            posActual = "" + i + j;
            mActual = "m" + posActual;
            if (posActual <= posMascara) {
                document.getElementById(mActual).innerHTML = 1;
                document.getElementById(mActual).className = "bit mactiva";
            } else {
                document.getElementById(mActual).innerHTML = 0;
                document.getElementById(mActual).className = "bit minactiva";
            }
        }
    }
}

//Función para limipar la máscara
function limpiarMascara() {
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 8; j++) {
            posActual = "" + i + j;
            mActual = "m" + posActual;
            document.getElementById(mActual).innerHTML = 0;
            document.getElementById(mActual).className = "bit minactiva";
        }
    }
}