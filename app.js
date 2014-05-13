$(document).ready(function() { 
	$("#start").click(function(event) {

		for (i = 1; i <= 100; i++) {
			if ( i % 15 == 0) {
				console.log("fizzbuzz");
				$("body").append("<p>fizzbuzz</p>");
			} else if ( i % 3 == 0 ) {
				console.log("fizz");
				$("body").append("<p>fizz</p>");
			} else if ( i % 5 == 0) {
				console.log("buzz");
				$("body").append("<p>buzz</p>");
			} else {
				console.log(i);
				$("body").append("<p>" + i + "</p>");
			}
		};
	});
});

function doFizzBuzz(value) {
	for (i = 0; i <= value; i++) {
		if ( i % 3 == 0) {
			i = "fizz";
			console.log(i);
		} else if ( i % 5 == 0 ) {
			i = "buzz";
			console.log(i);
		} else if ( i % 3 == 0 && i % 5 == 0 ) {
			i = "fizzbuzz";
			console.log(i);
		} else {
			console.log(i);
		};
	};
}