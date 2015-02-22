var pythagoreanTripletProduct = function(target) {
	for (var a = 1; a < target - 2; a++) {
		for (var b = 1; b < target - 2; b++) {
			var c = target - a - b;
			if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
				debug(a + " " + b + " " + c);
				return a * b * c;
			}
		}
	}
	return -1;
};

debug(pythagoreanTripletProduct(1000));