function st_encrypt(){
	var text = document.getElementById('start').value;
	var change = document.getElementById('value').value;
	var xorgen = new xor4096(change);
	change = parseInt(document.getElementById('value').value)*xorgen.int32();
	var result = "";
	for (var i =0; i<=text.length;i++) {
		var letter = text.charAt(i);
		x = String.charAt(letter);
		result = result + String.fromCharCode((x+change)%122);
		alert(result)
	}
	document.getElementById('result').innerHTML=result;
}