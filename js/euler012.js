var findFirstTriangleDivisors = function(n) {
	var sum = 0;
	var count = 1;
	var divisorCount = 0;
	while(divisorCount < n) {
		sum += count;
		divisorCount = getDivisorCount(sum);
		count++;
		debug(count + " - " + sum + " - " + divisorCount);
	}
	return sum;
};

var getDivisorCount = function(number) {
	var nod = 0;
    var sqrt = Math.sqrt(number);
 
    for(var i = 1; i<= sqrt; i++){
        if(number % i == 0){
            nod += 2;
        }
    }
    if (sqrt * sqrt == number) {
        nod--;
    }
    return nod;
};
debug(findFirstTriangleDivisors(500));