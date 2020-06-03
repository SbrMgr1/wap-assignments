
var makeCounter = function() {
		var privateCounter = 0; //private data
		function changeBy(val) { //private inner function
			privateCounter += val;
		}
       return { // three public functions are closures
		       	increment: function() { 
		       		changeBy(1); 
		       	}, 
		       	decrement: function() { 
		       		changeBy(-1); 
		       	}, value: function() { 
		       		return privateCounter; 
		       	}
       }; 
};
var counter1 = makeCounter(); 
var counter2 = makeCounter();