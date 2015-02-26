var countStartSundays = function(startDate, endDate) {
	var count = 0;
	var date = new Date(startDate);
	if( date.getDate() != 1) {
		date.setDate(1);
		date.setMonth(date.getMonth() + 1);
	}
	while(date < endDate) {
		if(date.getDay() == 0) {
			count++;
		}
		date.setMonth(date.getMonth() + 1);
		
	}
	return count;
};

debug(countStartSundays(new Date(1901, 0, 1), new Date(2000, 11, 31)));