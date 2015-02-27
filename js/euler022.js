var offset = 'A'.charCodeAt() - 1;

var getNameWorth = function(name) {
	name = name.toUpperCase();
	var sum = 0;
	for(var index in name) {
		sum += name[index].charCodeAt() - offset;
	}
	return sum;
};

jQuery.getJSON('assets/names022.json', function(data) {
	var sorted = data.names.sort();
	var sum = 0;
	sorted.forEach(function(name, index) {
		sum += getNameWorth(name) * (index + 1);
	});
	console.log(sum);
});