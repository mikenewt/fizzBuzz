$(document).ready(function() { 
	$("#input").keydown(function(event) {
		if (event.which == 13) {
			var number = Number($(this).val());
			doFizzBuzz(number);
		}
	});

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

function doFizzBuzz(number) {

	for (i = 1; i <= number; i++) {
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
}