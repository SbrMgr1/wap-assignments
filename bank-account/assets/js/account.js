
var accountInfoList = [];

var bankModule = (function(){
	"use strict";
	var accNamePrivate;
	var balancePrivate;
	var createAccountPrivate = function(accName,balance){
		accNamePrivate = document.querySelector('[name="accName"]').value;
		balancePrivate = document.querySelector('[name="balance"]').value;
		accountInfoList.push({
			accName:accNamePrivate,
			balance:balancePrivate
		});
	};
	var displayResultPrivate = function(){
		document.getElementById('display-result').value = '';
		for(var acc in accountInfoList){
			document.getElementById('display-result').value += "Account name: "+accountInfoList[acc].accName+" Balance: "+accountInfoList[acc].balance+"\n";
		}
	};
	return {
		createAccount:createAccountPrivate,
		displayResult:displayResultPrivate,

	};

})();

window.onload = function(){
		document.getElementById('create-acc-form').onsubmit = function(){
			bankModule.createAccount();
			bankModule.displayResult();
			return false;
		};

};
