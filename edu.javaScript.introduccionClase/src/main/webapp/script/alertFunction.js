function generarAlerta(){
    let num1 = 10;
    alert(num1);
}

function prueba1() {
	let texto = "No soy un número";
	let conversion= Number(texto);
	document.write(typeof(conversion) + " " + conversion);
}

function prueba2() {
	let numero1 = "3";
	let numero2 = "7";
	let numero3 = "10";
	
	let suma = Number(numero1) + Number(numero2) + Number(numero3);
	
	let concatenacion = numero1 + numero2 + numero3;
	
	document.write(suma);
	document.write("	" + typeof(suma));
	
	document.write("\n" + concatenacion);
	document.write("	" + typeof(concatenacion));
	
}