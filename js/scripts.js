var triangle = {
	type: function() {
		var sideArray = [this.side1, this.side2, this.side3].sort();

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
	}
};


$(document).ready(function(){

	$("form.triangles").submit(function(event){
	event.preventDefault();

	triangle.side1 = parseInt($("input#side1").val());
	triangle.side2 = parseInt($("input#side2").val());
	triangle.side3 = parseInt($("input#side3").val());

	if (triangle.type() === false) {
		alert("Please enter a valid triangle");
	} else if (triangle.type() === "equilateral") {
			$("div#equilateral").append("<li>"+ triangle.side1 + "," + triangle.side2 + "," + triangle.side3 + " </li>");
	} else if (triangle.type() === "isosceles") {
			$("div#isosceles").append("<li>"+ triangle.side1 + "," + triangle.side2 + "," + triangle.side3 + " </li>");
	} else {
			$("div#scalene").append("<li>"+ triangle.side1 + "," + triangle.side2 + "," + triangle.side3 + " </li>");
	}

	});
});



