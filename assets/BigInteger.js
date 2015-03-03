//TODO: This is horribly slow implementation. Need to make way better 
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

var evaluate = function(num, operation) {
	var result;
	if (num instanceof BigInteger) {
		result = operation(num.getValue());
	} else if (typeof num == 'number') {
		result = operation(num + "");
	} else if (typeof num == 'string') {
		result = operation(num);
	}
	return result;
};

BigInteger.prototype.mod = function(num) {

	var me = this;
	return evaluate(num, function(val) {
		var multiplier = me.divide(val);
		return new BigInteger(me.subtract(multiplier.multiply(val)).getValue().replace(/^0+/, ''));
	});
};


BigInteger.prototype.multiply = function(num) {
	var result = new BigInteger(0);
	var me = this;
	var multiply = function(val) {
		var products = [];
		for (var a = me.value.length - 1; a >= 0; a--) {
			var multiple = "";
			var carry = 0;
			for (var b = val.length - 1; b >= 0; b--) {
				var digit = parseInt(me.value.charAt(a)) * parseInt(val.charAt(b)) + carry;
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
		return new BigInteger(result.getValue().replace(/^0+/, ''));
	};
	return evaluate(num, multiply);
};

var repeat = function(term, times) {
	var str = "";
	for (var i = 0; i < times; i ++) {
		str += term;
	}
	return str;
}

BigInteger.prototype.greaterThan = function (num) {
	var me = this;
	return evaluate(num, function(val) {
		return greaterThanDefault(val, me, false);
	});
};

BigInteger.prototype.gte = function(num) {
	var me = this;
	return evaluate(num, function(val) {
		return greaterThanDefault(val, me, true);
	});	
};

var greaterThanDefault = function(num, me, isEqual) {
	if(me.value.length != num.length) {
		return me.value.length > num.length;
	}
	for (var i = 0; i < num.length; i++) {
		var digitA = parseInt(me.value.charAt(i));
		var digitB = parseInt(num.charAt(i));
		if(digitA != digitB) return digitA > digitB;
	}
	return isEqual;
};

BigInteger.prototype.lessThan = function (num) {
	
};

BigInteger.prototype.divide = function(num) {
	var me = this;
	return evaluate(num, function(val) {
		var count = 0;
		var increment = val;
		val = new BigInteger(val);
		if(me.gte(val)) {
			count++;
			while(me.gte(val)) {
				val = val.add(val);
				count *= 2;
			}
			while(!me.greaterThan(val)) {
				val = val.subtract(increment);
				count--;
			}
		}
		return new BigInteger(count);
	});
};

BigInteger.prototype.isNegative = function() {
	return this.value.charAt(0) == "-";
};

BigInteger.prototype.subtract = function(num) {
	if(num == 0) return this;
	var me = this;
	var result = "";
	var carry = 0;
	var subtract = function(val) {
		var countA = me.value.length - 1;
		var countB = val.length - 1;
		while(countA >= 0 && countB >= 0) {
			var digit = parseInt(me.value.charAt(countA)) - parseInt(val.charAt(countB)) - carry;
			if(digit < 0) {
				carry = 1;
				result = (digit + 10) + result;
			} else {
				carry = 0;
				result = digit + result;
			}
			countA--; countB--;
		}
		result = new BigInteger(me.value.substring(0, countA + 1) + val.substring(0, countB + 1)).subtract(carry).getValue().replace(/^0+/, '') + result;
		return new BigInteger(result);
	};
	return evaluate(num, subtract);
};

BigInteger.prototype.add = function(num) {
	if(num == 0) return this;
	var me = this;
	var result = "";
	var carry = 0;
	var add = function(val) {
		var countA = me.value.length - 1;
		var countB = val.length - 1;
		var carry = 0;
		while(countA >= 0 && countB >= 0) {
			var digit = parseInt(me.value.charAt(countA)) + parseInt(val.charAt(countB)) + carry;
			carry = Math.floor(digit / 10);
			result = digit % 10 + result;
			countA--; countB--;
		}
		result = new BigInteger(me.value.substring(0, countA + 1) + val.substring(0, countB + 1)).add(carry).getValue().replace(/^0+/, '') + result;
		return new BigInteger(result);		
	};
	return evaluate(num, add);
};
var x = new BigInteger(199);
var y = new BigInteger(50);
var z = new BigInteger(50);

debug(x.divide(y).getValue());
debug(x.mod(y).getValue());
debug(x.add(y).getValue());
debug(x.multiply(y).getValue());
debug(x.subtract(y).getValue());
debug(z.greaterThan(x));
debug(z.gte(x));