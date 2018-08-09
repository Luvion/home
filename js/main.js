$('.btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('btn-active');
	$('.navigation').toggleClass('navigation-active');
})