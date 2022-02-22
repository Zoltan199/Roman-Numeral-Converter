function convertToRoman(num) {
  var result = "";
  var romanos = {
    1: "I", 
    2: "II", 
    3: "III",  
    4 : "IV", 
    5: "V", 
    6: "VI", 
    7 : "VII", 
    8 : "VIII", 
    9 : "IX", 
    10 : "X", 
    20 : "XX", 
    30 : "XXX", 
    40 : "XL", 
    50 : "L", 
    60 : "LX", 
    70 : "LXX", 
    80 : "LXXX", 
    90 : "XC", 
    100 : "C", 
    200 : "CC", 
    300 : "CCC", 
    400 : "CD", 
    500 : "D", 
    600 : "DC", 
    700 : "DCC", 
    800 : "DCCC", 
    900 : "CM", 
    1000: "M", 
    2000: "MM", 
    3000: "MMM"};

  var digitsNumber = String(num).split(""); //array unidades, decenas, centenas, millares
  for(var i =0; i <digitsNumber.length; i++){ //recorrer el numero
    var convertedNum = digitsNumber[i]*Math.pow(10,digitsNumber.length-i-1); //convertir valores a su base decimal
    if(romanos[convertedNum]) result +=romanos[convertedNum]; //verificar que exista y sumar concatenar el resultado
  }
  return result;    
}

convertToRoman(36);
