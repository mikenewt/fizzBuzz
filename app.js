$(document).ready(function() { 
	$("#enter-number").keyup(function() {
			var value = $(this).val();
			console.log(value);
			doFizzBuzz(value);
	});
});

function doFizzBuzz(v) {
	for (i = 0; i <= v; i++) {
		if ( i % 3 == 0) {
			i = "fizz";
		} else if ( i % 5 == 0 ) {
			i = "buzz";
		} else if ( i % 3 == 0 && i % 5 == 0 ) {
			i = "fizzbuzz";
		} else {
			console.log(i);
		};
	};
}