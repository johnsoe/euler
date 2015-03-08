var offset = 'A'.charCodeAt() - 1;
var triangleSums = {};

var generateTriangleSums = function() {
	var t = 0;
	var count = 1;
	while(t < 26 * 15) { //MAX value of a single word - most likely
		t += count;
		triangleSums[t] = count;
		count++;
	}
};

var isTriangleWord = function(word) {
	var sum = 0;
	for (var i in word) {
		sum += word[i].charCodeAt() - offset;
	}
	return triangleSums[sum];
};

jQuery.getJSON('assets/words042.json', function(data) {
	var count = 0;
	generateTriangleSums();
	console.dir(triangleSums);
	data.words.forEach(function(word) {
		if(isTriangleWord(word)) {
			count++;
		}
	});
	console.log("COUNT: " + count);
});