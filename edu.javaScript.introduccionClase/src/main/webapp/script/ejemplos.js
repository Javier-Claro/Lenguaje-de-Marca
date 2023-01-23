function ejemplo1() {
	let variable1 = 10;
     let variable2 = 5.3;

      document.write(typeof(variable1));
      document.write("\t" + typeof variable2);
}

function ejemplo2() {
	 let es = true;
	 document.write(typeof(es));
     document.write("\t" + es);
}

function ejemplo3() {
	let numeroGrande = 4567891324657987654;
     let numeroGrandeCasteado = BigInt(987654321654987654);

     document.write(typeof(numeroGrande));
     document.write("\t" + numeroGrande);
     document.write("\t" + typeof(numeroGrandeCasteado));
     document.write("\t" + numeroGrandeCasteado);
}

function ejemplo4() {
	let variableVacia;
     document.write(variableVacia);

     document.write("\t" + typeof(variableVacia));
}

function ejemplo5() { 
	let nulo = null;
     let vacio;
     document.write(nulo);
     document.write("\t" + typeof(nulo));
}

function ejemplo6() {
	let Objeto = new Object();

	document.write(Objeto);
}