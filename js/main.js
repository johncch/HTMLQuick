
$(document).ready(function(e) {
	console.log("jQuery loaded!");
	// $(".textwrap").textWrap("holder");
});

// Prevent errors in browsers without console support
if (!console) {
	var console = {
		log: function() {}
	};
}
