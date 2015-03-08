//9 1-digit 		-> 		 9
//90 2-digit 		-> 	   180
//900 3-digit		-> 	  2700
//9000 4-digit		-> 	 36000
//90000 5-digit		-> 	450000
//900000 6-digit	-> 5600000

//					   6088889
//Champernowne #
var nthDigit = function(n) {
	var num;
	var count = 0;
	while(n > 0) {
		num = Math.pow(10, count) * 9 * (count + 1);
		n -= num;
		count++;
	}
	debug(n);

	var start = Math.pow(10, count);
	while(n < 0) {
		n += count;
		start--;
	}
	debug(start + " " + n);
	return (start + "").charAt(n);
};

//0 indexing instead of 1.
debug(nthDigit(9));
debug(nthDigit(99));
debug(nthDigit(999));
debug(nthDigit(9999));
debug(nthDigit(99999));
debug(nthDigit(999999));

