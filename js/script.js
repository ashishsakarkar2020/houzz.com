$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(300);

		$(this).addClass('active');

		$('.drop').find('li').click(function(){

			var selectResult = $(this).html();

			$(this).parent().parent().find('input').val(selectResult);

			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(300);
		});

	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(300);
	}
	return false;
});