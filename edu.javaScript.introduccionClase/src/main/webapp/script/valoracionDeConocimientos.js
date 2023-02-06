function operacion() {
	
	var resultado;
	resultado = (41 + (68 * 4)) / (3 + (23 * 7));
	//Resultado = 1,91
	
	//Tipo del resultado:
	document.write(typeof(resultado));
}

function mostrarResultado() {
	
	//String enseñando el resultado
	let cadena="El resultado de la operación es: ";
	
	//Se enseña el resultado
	document.write(cadena + resultado);
	
	//Se indica el carácter del índice 10
	document.write("\tEl carácter en el índice 10 del string es '" + cadena.charAt(10) + "'");
}