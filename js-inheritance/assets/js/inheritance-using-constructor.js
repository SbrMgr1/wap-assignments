(function(){
	"use strict";
	console.log("using constructor:")
	function Bicycle(){
		this.speed = 0;
	}
	Bicycle.prototype.applyBrake = function(breakAmt){
				this.speed -= breakAmt;
	};
	Bicycle.prototype.speedup = function(speedupAmt){
				this.speed += speedupAmt;
	};
	function MountainBike(){
		Bicycle.call(this);
		this.gear = 1;	
	}
	

	var start = function(){

		var bicyclePrototype = new Bicycle();
		console.log('bicyclePrototype',bicyclePrototype);

		bicyclePrototype.speedup(5);
		bicyclePrototype.speedup(15);

		bicyclePrototype.applyBrake(10);

		console.log(bicyclePrototype);

		MountainBike.prototype = Object.create(Bicycle.prototype);
		MountainBike.prototype.constructor = MountainBike;

		MountainBike.prototype.setGear = function(gearValue){
			this.gear = gearValue;
		};

		var mountainBikePrototype = new MountainBike();

		mountainBikePrototype.speedup(20);
		mountainBikePrototype.setGear(2);

		console.log('mountainBikePrototype',mountainBikePrototype);

		// mountainBikePrototype.speedup(5);

		// console.log('mountainBikePrototype',mountainBikePrototype);
	};
	start();
})();