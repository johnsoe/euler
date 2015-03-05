var pandigitalProducts = function() {
	var nonRepeating = {};
	for (var i = 1; i < 10000; i++) {
		var phrase = i + "";
		if(!repeatedChar(phrase) && phrase.indexOf('0') == -1) {
			nonRepeating[i] = true;
		}
	}
	var products = {};
	Object.keys(nonRepeating).forEach(function(first) {
		Object.keys(nonRepeating).forEach(function(second) {
			var result = first * second;
			var term = first + "" + second + "" + result;
			if(nonRepeating[result] && !repeatedChar(term) && term.length == 9) {
				debug(first + " " + second + " " + result);
				products[result] = true;
			}
		});
	});

	return Object.keys(products).reduce(function(prev, next) {
		return parseInt(prev) + parseInt(next);
	});
};

var repeatedChar = function(phrase) {
	for(var i = phrase.length - 1; i >= 0; i--) {
		var c = phrase.charAt(i);
		if (phrase.indexOf(c) != i) {
			return true;
		}
	}
	return false;
};

debug(repeatedChar("1123"));
debug(repeatedChar("1239"));
debug(repeatedChar("1234569"));

debug(pandigitalProducts());