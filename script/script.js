$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function myFunction() {
	var x = document.getElementById("myLinks");
		if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}