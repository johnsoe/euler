function BigInteger(n) {
	this.value = [0];
	this.add(n);
}

BigInteger.prototype.getValue = function() {
	return this.value.reduceRight(function(prev, next) {
		return prev + next;
	}, "");
}

BigInteger.prototype.add = function(num) {
	var result;
	var carry = 0;
	if (num instanceof BigInteger) {
		for (var i = 0; i < num.value.length; i++) {
			result = num.value[i] + carry;
			if(i < this.value.length) {
				result += this.value[i];
			}
			carry = Math.floor(result / 10);
			this.value[i] = result % 10;
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
			var digit = num % 10;
			num = Math.floor(num / 10);

			if(!this.value[index]) {
				this.value.push(0);
			}

			result = this.value[index] + digit + carry;
			this.value[index] = result % 10;
			carry = Math.floor(result / 10);
			index++;
		}
	}
	if(this.value[this.value.length - 1] == 0 && this.value.length != 1) {
		this.value.pop();
	}
	return this;
};

var findFibonacciWithNDigits = function(digits) {
	var first = 1;
	var second = 1;
	var next = new BigInteger(2);
	count = 2;
	while(next.value.length < digits) {
		next = new BigInteger(second).add(first);
		first = new BigInteger(second);
		second = new BigInteger(next);
		count++;
	}
	return count;
};
debug(findFibonacciWithNDigits(1000));