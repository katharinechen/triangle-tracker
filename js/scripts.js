var triangle = function(side1, side2, side3) {

	var sideArray = [side1, side2, side3].sort();

 if ((sideArray[0] + sideArray[1]) <= sideArray[2]) {
		return false;
	} else {
			if ((sideArray[0] === sideArray[1]) && (sideArray[1] === sideArray[2])) {
				return "equilateral";
			} else if ((sideArray[0] === sideArray[1]) && (sideArray[0] + sideArray[1] > sideArray[2])) {
				return "isosceles";
			} else {
				return "scalene";
			}
	}
};



