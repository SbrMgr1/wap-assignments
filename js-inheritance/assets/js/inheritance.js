(function(){
	"use strict";
	console.log("using function expression:")
	var createBicyclePrototye = function(){
		return {
			speed:0,
			applyBrake:function(breakAmt){
				this.speed -= breakAmt;
			},
			speedup:function(speedupAmt){
				this.speed += speedupAmt;
			}
		};
	};
	var createMountainBikeProtoype = function(prototype){
		var obj = Object.create(prototype);
		obj.gear = 1;
		obj.setGear = function(gearValue){
			this.gear = gearValue;
		};
		return obj;

	};
	var start = function(){
		var bicyclePrototype = createBicyclePrototye();
		console.log('bicyclePrototype',bicyclePrototype);

		bicyclePrototype.speedup(5);
		bicyclePrototype.speedup(15);

		bicyclePrototype.applyBrake(10);

		var mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);
		console.log('mountainBikePrototype',mountainBikePrototype);

		mountainBikePrototype.speedup(5);

		console.log('mountainBikePrototype',mountainBikePrototype);
	};
	start();
})();
