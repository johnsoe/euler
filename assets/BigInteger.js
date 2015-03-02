function BigInteger(n) {
	if (n instanceof BigInteger) {
		this.value = n.getValue();
	} else {
		this.value = n + "";
	}
}

BigInteger.prototype.getValue = function() {
	return this.value;
}

var evaluate = function(bigInt, value, operation) {

};

BigInteger.prototype.mod = function(num) {
	var result = new BigInteger(0);
	if (num instanceof BigInteger) {
		result = this.mod(num.getValue());
	} else if (typeof num == 'number') {
		result = this.mod(num + "");
	} else if (typeof num == 'string') {

	}
};

BigInteger.prototype.multiply = function(num) {
	var result = new BigInteger(0);
	if (num instanceof BigInteger) {
		result = this.multiply(num.getValue());
	} else if (typeof num == 'number') {
		result = this.multiply(num + "");
	} else if (typeof num == 'string') {
		var products = []
		for (var a = this.value.length - 1; a >= 0; a--) {
			var multiple = "";
			var carry = 0;
			for (var b = num.length - 1; b >= 0; b--) {
				var digit = parseInt(this.value.charAt(a)) * parseInt(num.charAt(b)) + carry;
				carry = Math.floor(digit / 10);
				multiple = digit % 10 + multiple;
			}
			products.push(carry + multiple);
		}
		for (var i = 0; i < products.length; i++) {
			var repetition = repeat("0", i);
			var bI = new BigInteger(products[i] + repetition);
			result = bI.add(result);
		}
	}
	return new BigInteger(result.getValue().replace(/^0+/, ''));
};

var repeat = function(term, times) {
	var str = "";
	for (var i = 0; i < times; i ++) {
		str += term;
	}
	return str;
}

BigInteger.prototype.add = function(num) {
	if(num == 0) return this;
	var result = "";
	var carry = 0;
	if (num instanceof BigInteger) {
		result = this.add(num.getValue());
	} else if (typeof num == 'number') {
		result = this.add(num + "");
	} else if (typeof num == 'string') {
		var countA = this.value.length - 1;
		var countB = num.length - 1;
		var carry = 0;
		while(countA >= 0 && countB >= 0) {
			var digit = parseInt(this.value.charAt(countA)) + parseInt(num.charAt(countB)) + carry;
			carry = Math.floor(digit / 10);
			result = digit % 10 + result;
			countA--; countB--;
		}
		result = this.value.substring(0, countA + 1) + result;
		result = num.substring(0, countB + 1) + result;
	}
	return new BigInteger(result);
};
var y = new BigInteger("18234968125913458913459823458923452012341441234");
var x = new BigInteger("2341513461619512159443431414");

debug(x.add(y).getValue());
debug(x.multiply(y).getValue());