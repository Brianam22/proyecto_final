function limpiarRegistro(){
document.getElementById("miForm").reset();	
}

var NuMe = function(num1,num2,num3,num4){
var num1 = parseFloat(document.getElementById("num1").value);
var num2  = parseFloat(document.getElementById("num2").value);
var num3 = parseFloat(document.getElementById("num3").value);
var num4  = parseFloat(document.getElementById("num4").value);
var resultado = (num1+num2+num3+num4);
return resultado/4;
}



var calculo = function(n1){
var numero1 = parseFloat(document.getElementById("numero1").value);
var E = numero1/5280;
    return  "la equivalencia es: "+E+"mi";
}
