//Muestra las opciones en caso de seleccionar Si, en es empresa?
function datosEmpresa (){
    document.getElementById("opcionEmpresa").style.display = "block";
}
//Oculta las opciones de caso de seleccionar No, en es empresa?
function noEsEmpresa (){
    document.getElementById("opcionEmpresa").style.display = "none";

}
//Si selecciona la opcion de "ya soy cliente", muestra la puntuacion, sino la oculta
function puntuaServicio(){
    var clie;
    clie = document.getElementById("clienteConoce");
    if (clie.value == "soyCliente"){
        document.getElementById("esCliente").style.display = "block";
    } else {
        document.getElementById("esCliente").style.display = "none";
    }
}


// Valida los datos
function validarDatos(){
    var control, mail, nombre, nroTelefono, validado, cant, puntua;
    
    validado = true;
    //Valido email
    control = document.getElementById("idMail"); 
    if (control.value == ""){ //Mail es un campo obligatorio, por ende no puede estar vacio
        control.value = "Es un dato obligatorio";
        control.style.background = "#FF5733";
        validado = false ;
    } else {
        mail = control.value ;
        if (mail.indexOf("@") == -1){ //Como es un mail, debe tener @, si no lo tiene el dato es incorrecto
            control.value = "Debe ser una casilla de mail";
            control.style.background = "#FF5733";
            validado = false ;
        }
    } 
    //valido nombre, es un dato obligatorio. Ademas no acepta numeros
    control = document.getElementById("idNombre");
    if (control.value == ""){ //Nombre es un campo obligatorio, por ende no puede estar vacio
        control.style.background = "#FF5733";
        control.value = "Es un dato obligatorio";
        validado = false ;
    } else {
        nombre = control.value;
    } if (!isNaN(nombre)){ //Nombre no puede ser un número
        control.style.background = "#FF5733";
        control.value = "Debe ser un nombre";
        validado = false 
    }
    //Valido número de teléfono
    control = document.getElementById("idTelefono");
    if (control.value == ""){ //No es obligatorio, si esta en blanco queda validado
        validado = true
    } else if 
    (isNaN(control.value)){ //Telefono, debe ser un número entero
        control.value = "Tiene que ser un número"
        control.style.background = "#FF5733";
        validado = false ;
    } else {
        nroTelefono = control.value;
        if (nroTelefono != parseInt(nroTelefono) || parseInt(nroTelefono)<999999999){ //No tiene que ser un numero decimal
            control.value = "Tiene que ser un número de telefono" //Tiene que ser un numero de telefono
            control.style.background = "#FF5733";
            validado = false ;
        } 
    }
    //controlar que puntuación sea un numero decimal entre 1 y 5
    control = document.getElementById("puntuacion");
    if (control.value == ""){
        validado = true ; //No es obligatorio.
    } else if (isNaN(control.value)){
            control.value = "Debe ser un numero" //Valida que sea un número
            control.style.background = "#FF5733";
            validado = false ;
    } else { 
        puntua = control.value ;
        if (puntua !=parseFloat(puntua)|| parseFloat(puntua) <1 || parseFloat(puntua)>5){
            control.value = "Debe ser un número entre 1 y 5" //Valida que sea entre 1 y 5
            control.style.background = "#FF5733";
            validado = false ;
    } 
}
    //Valido la cantidad necesaria
    control = document.getElementById("cantNecesaria");
    if (control.value == ""){ //No es oblgiatorio
        validado = true
    } else if 
    (isNaN(control.value)){ //Cantidad, debe ser un número entero
        control.value = "Tiene que ser un número"
        control.style.background = "#FF5733";
        validado = false ;
    } else {
        cant = control.value;
        if (cant != parseInt(cant) || parseInt(cant)<0){ //No tiene que ser un numero decimal
            control.value = "Tiene que ser un número entero mayor a cero"; //Tiene que ser un numero mayor a cero
            control.style.background = "#FF5733";
            validado = false ;
        } 
    }

    //Comentario es un dato obligatorio
    control = document.getElementById("idComentario");
    if (control.value == ""){//Comentario es un dato obligaotrio
        control.value = "Es un dato obligatorio"
        control.style.background = "#FF5733";
        validado = false;
    }
    //Valido la fecha
    control = document.getElementById("fechaNecesidad");
    fecha =  control.value;

    if (fecha.length !== 10 ){ //Debe tener 10 caracteres
        control.value = "Formato dd/mm/aaaa"
        control.style.background = "#FF5733";
        validado = false;
  
    }
    if ( !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(fecha) ){ //Verifica el patron dd/mm/aaaa
        control.value = "Formato dd/mm/aaaa"
        control.style.background = "#FF5733";
        validado = false;
    }

    var fecha = fecha.split("/");// Mediante el delimitador "/" separa dia, mes y año
    var dia = parseInt(fecha[0]);
    var mes = parseInt(fecha[1]);
    var año = parseInt(fecha[2]);
    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];// Lista de dias en los meses, por defecto no es año bisiesto
    if ( mes === 1 || mes > 2 ){
       if ( dia > ListofDays[mes-1] || dia < 0 || ListofDays[mes-1] === undefined ){
            control.value = "Ingrese una fecha válida"
            control.style.background = "#FF5733";
            validado = false;
        }
    } else {
        var lyear = ( (!(año % 4) && año % 100) || !(año % 400) ); // Detecta si es año bisiesto y asigna a febrero 29 dias
        if ( lyear === false && dia >= 29 ){
            control.value = "Ingrese una fecha válida"
            control.style.background = "#FF5733";
            validado = false;
        }
        if ( lyear === true && dia > 29 ){
            control.value = "Ingrese una fecha válida"
            control.style.background = "#FF5733";
            validado = false;
        }
    }
    return validado
}


//Función para enviar los datos.
function enviarDatos(){
    var validacion;
    validacion = validarDatos(); //Llama a la funcion validar datos
    if(!validacion){
        return
    }
    limpioDatos = limpiar(); //Llama a la función limpiar datos
}


//Función para limpiar los casilleros
function limpiar(){ //limpio los casilleros con el boton borrar datos
    document.getElementById("idNombre").value = "";
    document.getElementById("idNombre").style.background = "white";
    document.getElementById("idMail").value = "";
    document.getElementById("idMail").style.background = "white";
    document.getElementById("idTelefono").value = "";
    document.getElementById("idTelefono").style.background = "white";
    document.getElementById("idEmpresa").value = "";
    document.getElementById("idEmpresa").style.background = "white";
    document.getElementById("cantNecesaria").value = "";
    document.getElementById("cantNecesaria").style.background = "white";
    document.getElementById("idComentario").value = "";
    document.getElementById("idComentario").style.background = "white";
    document.getElementById("puntuacion").value = "";
    document.getElementById("puntuacion").style.background = "white";
    document.getElementById("clienteConoce").value = "";
    document.getElementById("clienteConoce").style.background = "white";
    document.getElementById("esCliente").style.display = "none";
    document.getElementById("esCliente").value = "";
    document.getElementById("opcionEmpresa").style.display = "none";
    document.getElementById("fechaNecesidad").style.background = "white";
    document.getElementById("fechaNecesidad").value = "";
    document.querySelector('#emp > [value="No"]').checked = true;	




}