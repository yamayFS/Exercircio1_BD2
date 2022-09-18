var leitorDeCSV = new FileReader();
var leitorDeCSV2 = new FileReader();

var totalArquivoTipo1 = 0;
var totalArquivoTipo2 = 0;
var saldo = 0;

window.onload = function init() {
	leitorDeCSV.onload = leCSV;
	leitorDeCSV2.onload = leCSV2;

}

function pegaCSV(inputFile) {
	var file = inputFile.files[0];
	leitorDeCSV.readAsText(file);
}

function pegaCSV2(inputFile) {
	var file = inputFile.files[0];
	leitorDeCSV2.readAsText(file);
}

function leCSV(evt) {
	totalArquivoTipo1 = 0
	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';
		
	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			if (fileLine.length === 3) {
				strDiv += `<td class=leCSV1TB1-${j} >` + fileLine[j].trim() + '</td>';
			} else if (fileLine.length === 4) {
				strDiv += `<td class=leCSV2TB1-${j} >` + fileLine[j].trim() + '</td>';
			} else {
				strDiv += `<td>` + fileLine[j].trim() + '</td>';
			}
		}
		strDiv += '</tr>';
	}
	// Imprime total 1

	var CSVsaida = document.getElementById('CSVsaida');
	CSVsaida.innerHTML = strDiv;

	let elements = document.getElementsByClassName("leCSV1TB1-1").length === 0 ?
				document.getElementsByClassName("leCSV2TB1-2") :
				document.getElementsByClassName("leCSV1TB1-1");

	for (let el = 0; el < elements.length; el++) {
		var value = Number(elements[el].textContent);
		if (value) {
			totalArquivoTipo1 += value
		}
	}

	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += "<td class='total'>" + totalArquivoTipo1 +  '</td>';
	strDiv += '</tr>';
	
	strDiv += '</table>';

	CSVsaida.innerHTML = strDiv;

}

//-----------------------------------------------------------------------------------------------------------------

function leCSV2(evt) {
	totalArquivoTipo2 = 0;
	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';

	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			if (fileLine.length === 3) {
				strDiv += `<td class=leCSV1TB2-${j} >` + fileLine[j].trim() + '</td>';
			} else if (fileLine.length === 4) {
				strDiv += `<td class=leCSV2TB2-${j} >` + fileLine[j].trim() + '</td>';
			} else {
				strDiv += `<td>` + fileLine[j].trim() + '</td>';
			}
		}
		strDiv += '</tr>';
	}

	var CSVsaida = document.getElementById('CSVsaida2');
	CSVsaida.innerHTML = strDiv;

	let elements = document.getElementsByClassName("leCSV1TB2-1").length === 0 ?
				document.getElementsByClassName("leCSV2TB2-2") :
				document.getElementsByClassName("leCSV1TB2-1");
			
	for (let el = 0; el < elements.length; el++) {
		var value = Number(elements[el].textContent);
		if (value) {
			totalArquivoTipo2 += value
		}
	}

	// Imprime total 2
	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += '<td>' + totalArquivoTipo2 + '</td>';
	strDiv += '</tr>';
	strDiv += '</table>';

	CSVsaida.innerHTML = strDiv;
}
