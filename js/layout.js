jQuery(document).ready(function(){
	$(".navlist > li").mouseover(function(){
		if($(this).find(".submenu").length > 0){
			$(this).find(".submenu").stop().slideDown(500);
		} 
	});
	$(".navlist > li").mouseout(function(){
		$(this).find(".submenu").stop().slideUp(500);
	});
	$('.trigger').on('click', function(){
		$('.modal_contact').toggleClass('open');
		return false;
	})
	$('#copy_email').click(function(){
		$('#textbox_email').select()
		document.execCommand("copy")
		alert('E-mail 주소가 복사 되었습니다.')
	});
});