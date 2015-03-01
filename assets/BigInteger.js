function BigInteger(n) {
	this.value = [0];
	this.add(n);
}

var maxInArray = 10000000;

BigInteger.prototype.getValue = function() {
	return this.value.reduceRight(function(prev, next) {
		return prev + next;
	}, "");
}

BigInteger.prototype.mod = function(n) {

};

BigInteger.prototype.multiply = function(n) {

};

BigInteger.prototype.add = function(num) {
	var result;
	var carry = 0;
	if (num instanceof BigInteger) {
		for (var i = 0; i < num.value.length; i++) {
			result = num.value[i] + carry;
			if(i < this.value.length) {
				result += this.value[i];
			}
			carry = Math.floor(result / maxInArray);
			this.value[i] = result % maxInArray;
		}
		if (carry != 0) {
			if(this.value[i]) {
				this.value[i] += carry;
			} else {
				this.value[i] = carry;
			}
		}
	} else if (typeof num == 'number') {
		var index = 0;
		while(num > 0) {
			var digit = num % maxInArray;
			num = Math.floor(num / maxInArray);

			if(!this.value[index]) {
				this.value.push(0);
			}

			result = this.value[index] + digit + carry;
			this.value[index] = result % maxInArray;
			carry = Math.floor(result / maxInArray);
			index++;
		}
	} else if (typeof num == 'string') {
		
	}
	if(this.value[this.value.length - 1] == 0 && this.value.length != 1) {
		this.value.pop();
	}
	return this;
};

//var bigInt = new BigInteger("12384151239481239495123");
//debug(bigInt.getValue());
debug(typeof "AAA")