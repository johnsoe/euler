p = {};
h = {};
var generate = function(n) {
	for (var i = 1; i <= n; i++) {
		var check = triangle(i);
		p[pentagon(i)] = i;
		h[hexagon(i)] = i;
		if (p[check] && h[check]) {
			debug(check);
		}
	}
};

var triangle = function(n) {
	return n * (n + 1) / 2;
};
var pentagon = function(n) {
	return n * (3 * n - 1) / 2;
};
var hexagon = function(n) {
	return n * (2 * n - 1);
};

generate(300000);