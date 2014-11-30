app.factory('fuelService', function($window) {
	
	var vehicles [];
	var vh {};

	var persistVehicle = function() {
		$window.localStorage.setItem('vehicles', JSON.stringify(vehicles));
	};

	vh.addName = function(vehicle) {
		vehicles.push(vehicle);
		persistVehicle();
	};

	vh.updateVehicle = function(vehicle){
		
		var index = vehicles.indexOf(vehicle);
		
		if(index != -1) {
			vehicle = vehicle+'-'+count;
			count++;
			vehicles[index]=vehicle;
			persistVehicle();
		}

	};

	vh.getVehicle = function() {
		
		var retrivedVehicles = JSON.parse(
			$window.localStorage.getItem('Vehicles')
		);
		
		if(retrivedVehicles && retrivedVehicles.length > 0) {
			Vehicles = retrivedVehicles;
		}
		
		return Vehicles;
	};

	vh.remove = function(Vehicle) {
		
		var index = Vehicles.indexOf(Vehicle);
		
		if(index != -1) {
			Vehicles.splice(index, 1);
			persistVehicle();
		}
		
	};


});