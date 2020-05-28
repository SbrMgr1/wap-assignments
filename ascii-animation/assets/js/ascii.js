var animating = "";
var speed = 250;
var doAnimation = function(animation_txt){
	var animations = animation_txt.split("=====\n");
	var cnt = 0;
	animating = setInterval(function(){

		if(cnt >= animations.length){
			cnt = 0;
		}
		document.querySelector('[name="field-area"]').value = animations[cnt];
		cnt++;
	},speed)

}
function isTurboChecked(){
	return document.querySelector('[name="speed"]').checked;
}
window.onload = function(){

	var animation_txt = '';
	document.getElementById('animation-option').onchange = function(){
		animation_txt = ANIMATIONS[this.value.toUpperCase()];
		document.querySelector('[name="field-area"]').value = animation_txt;
	}
	document.getElementById('start-btn').onclick = function(){
		if(isTurboChecked() == true){
			speed = 50;
		}else{
			speed = 250;
		}
		if(animating != ""){
			clearInterval(animating);
			animating = '';
		}
		doAnimation(animation_txt)
		document.getElementById('animation-option').disabled = true;
		document.getElementById('start-btn').disabled = true;
		document.getElementById('stop-btn').disabled = false;
		
	}
	document.getElementById('stop-btn').onclick = function(){
		if(animating !== ""){
			clearInterval(animating);
			animating = "";
			document.querySelector('[name="field-area"]').value = animation_txt;
		}
		document.getElementById('animation-option').disabled = false;
		document.getElementById('start-btn').disabled = false;
		document.getElementById('stop-btn').disabled = true;
		
	}
	document.querySelector('[name="speed"]').onchange = function(){
		if(document.getElementById('start-btn').disabled == true){
			if(isTurboChecked() == true){
				speed = 50;
			}else{
				speed = 250;
			}
			if(animating == ""){
				doAnimation(animation_txt)
			}else{
				clearInterval(animating);
				animating = '';
				doAnimation(animation_txt)
			}
		}
		
	}
	document.getElementById('size-option').onchange = function(){
		document.querySelector('[name="field-area"]').style.fontSize = this.value;
	}


}