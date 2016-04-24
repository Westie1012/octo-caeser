function st_encrypt() {
	var text = document.getElementById('start').value;
	var change = document.getElementById('value').value;
	var result = "";
	var xorgen = new xor4096(change);
	alert("Warning this function does not work for longer strings and some charchters.");
	for (i = 0; i < text.length; i++) {
		var letter = text.charAt(i);
		var rnd = Math.abs(xorgen.int32()) % 500;
		var n = String.charCodeAt(letter);
		var fchange = (parseInt(change) + rnd)
		var n_letter = ((n - 32 + fchange) % 90) + 32;
		result = result + String.fromCharCode(n_letter);
	}
	document.getElementById('result').innerHTML = result;
}

function st_decrypt() {
	var text = document.getElementById('start').value;
	var change = document.getElementById('value').value;
	var result = "";
	var xorgen = new xor4096(change);
	alert("Warning this function does not work for longer strings and some charchters.");
	for (i = 0; i < text.length; i++) {
		var letter = text.charAt(i);
		var rnd = Math.abs(xorgen.int32()) % 500;
		var n = String.charCodeAt(letter);
		var fchange = (parseInt(change) + rnd);
		var n_letter = ((((n - 32 - fchange) % 90) + 90) % 90) + 32;
		result = result + String.fromCharCode(n_letter);
	}
	document.getElementById('result').innerHTML = result;
}

function crypt(mult) {
	var text = document.getElementById('start').value;
	var change = document.getElementById('value').value;
	var result = "";
	for (i = 0; i < text.length; i++) {
		var letter = text.charAt(i);
		var lchar = String.charCodeAt(letter);
		result = result + String.fromCharCode((lchar - 32 + (parseInt(change) * mult) % 90) + 32);
	}
	document.getElementById('result').innerHTML = result;
}