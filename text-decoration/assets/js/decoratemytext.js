function showAlert(){
	// alert("Hello, world!");
	let textarea = document.getElementById('text-field');

	let fontSize = window.getComputedStyle(textarea, null).getPropertyValue('font-size');//this gives value in it whatever we set the font-size unit
	console.log(fontSize)
	fontSizeVal = parseInt(parseInt(fontSize)* 0.75);// px to pt

	var interval = setInterval(function(){
		console.log('here'+fontSizeVal);
		fontSizeVal = parseInt(fontSizeVal)+2;
		textarea.style.fontSize = fontSizeVal+'pt';
		
	},500);
	

}
function changeTextArea(){
	// alert(document.getElementById('blink-check').checked);
	let textarea = document.getElementById('text-field');
	if(document.getElementById('blink-check').checked == true){
		textarea.style.fontWeight = 'bold';
		textarea.style.color = 'green';
		textarea.style.textDecoration = 'underline';
	}else{
		textarea.style.fontWeight = 'normal';
		textarea.style.color = 'black';
		textarea.style.textDecoration = 'none';
	}
}
