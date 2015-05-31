alert("hello, world!");

// name our angular app
angular.module('firstApp', [])
	.controller('mainController', function() {

		console.log("inside the controller function");

		// bind this to vm (view-model)
		var vm = this;

		console.log("defined this");

		// define variables and objects on this
		// this lets them be available to our views

		// define a basic variable
		vm.message = 'Hey there! Come and see how good I look!';
		
		console.log("defined message");

		// define a list of items
		vm.computers = [
			{ name: 'Macbook Pro', color: 'Silver', nerdness: 7 },
			{ name: 'Yoga 2 Pro', color: 'Gray', nerdness: 6 },
			{ name: 'Chromebook', color: 'Black', nerdness: 5 }
		];

		console.log("defined computers");
	});

alert("end of file");