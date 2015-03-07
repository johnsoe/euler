//Logically you know the number has to be between 9123 and 9876
var largestPandigitalProducts = function() {
	for(var i = 9123; i < 9876; i++) {
		var num = i + "" + (i * 2) ;
		if(isPandigital(num)) {
			debug(num);
		}
	}	
};

var isPandigital = function(val) {
	for (var i = 1; i < 10; i++) {
		if(val.indexOf(i) == -1) {
			return false;
		}
	}
	return true;
};

debug(largestPandigitalProducts());