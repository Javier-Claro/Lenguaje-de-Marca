/*function alumno() {
	
	var alumno = new Object();
	
	alumno.nombre = 'Javier';
	alumno.apellidos = 'Claro barba';
	alumno.edad = 20;	
	
    document.write("\n\n"+ typeof(alumno));
    
    document.write("\n\n"+ alumno.alumno);
    
    document.write("\n\n"+ alumno.nombre);
    
    document.write("\n\n"+ alumno.apellidos);
    
    document.write("\n\n"+ alumno.edad);
} */

function ejercicio1() {
	
	function alumno(nombre, apellidos, edad) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
}

	var alumnoUno = new alumno('Javier','Claro',20);

		document.write(typeof(alumnoUno));
		document.write(alumnoUno instanceof Object); //NO SE UTILIZA NUNCA

		document.write(alumnoUno instanceof alumno);
}