$(document).ready(function() {
	$("#Nav").click(function() {
		$(".Content").toggle(500);
	});
});

$("#VideoReview1").click(function() {
    $('html, body').animate({scrollTop: $("#VideoReview3").offset().top}, 1000);
});

$("#Footer1").click(function() {
    $('html, body').animate({scrollTop: $(".Footer2").offset().top}, 1000);
});
