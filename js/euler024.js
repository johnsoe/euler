var findNthPermutation = function(arr, n) {
	var permutations = {};
	var multiple = 1;
	var response = '';
	for(var i = 1; i <= arr.length; i++) {
		multiple *= i;
		permutations[i] = multiple;
	}
	var count = arr.length - 1;
	n = n - 1;
	while(arr.length > 0) {
		var nextPermutation = permutations[count];
		if(n >= nextPermutation) {
			var index = Math.floor(n / nextPermutation);
			n = n % nextPermutation;
			response += arr.splice(index, 1);
		} else {
			response += arr.splice(0, 1);
		}
		count--;
	}
	return response;
};

debug(findNthPermutation([0,1,2,3,4,5,6,7,8,9], 1000000));