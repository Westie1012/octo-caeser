alphabet = [];
for (i=65;i<=90;i++){
    a[a.length] = String.fromCharCode(i);
}
alphabet2 = [];
for (i=97;i<=122;i++){
    l[l.length] = String.fromCharCode(i);
}
alphabet = alphabet + alphabet2;
function st_encrypt(){
	var text = document.getElementById('start').value;
	var change = document.getElementById('value').value;
	var xorgen = new xor4096(change);
	change = parseInt(document.getElementById('value').value)*xorgen.int32();
}