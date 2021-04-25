$(function(){
	$("nav .mbtn").on("click", function(){
		if($("nav").hasClass("on")){
			$("nav").removeClass("on");
		} else{
			$("nav").addClass("on");
		}
	}); 
	$(".navlist > li").find(".dp2").parent().addClass("act");
	$(".navlist > li > a").on("click", function(){
		var _this = $(this);
		var _thispt = _this.parent();
		var _target = _thispt.find(".dp2");
		if(_thispt.hasClass("on")){
			_thispt.removeClass("on");
			_target.slideUp();
		} else{$(".navlist > li").removeClass("on");
			_thispt.addClass("on");
			$(".navlist .dp2").slideUp();
			_target.slideDown();
			}
	});
	$('.tabmenu > li').click(function(){
		var tab_id = $(this).attr('data-tab');
		
		$('.tabmenu > li').removeClass('active');
		$('.tab-content').removeClass('active');
		
		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
		
		return false;
	});
	
	var gall = setInterval(galleryFun, 5000);
	var inter = true;
	var idx = 2;
	function galleryFun(){
		$(".tab-content > ul").animate({
			"left":-300*idx+"px"
		},300);
		$(".g_item > ul > li").eq(idx-1).addClass("on").silbling().removeClass("on");
		idx++;
		if(idx> $(".tab-content > ul > li").length-3){
			$(".tab-content > ul").animate({
				"left":0
			},0);
			idx=0;
			}
		}
	$(".tab-content, .g_item").hover(function(){
		if(inter==true){
			clearInterval(gall);
			inter=false;
		}
	},function(){
		if(inter==false){
			gall = setInterval(galleryFun,5000);
			inter=true;
		}
	});
	
	$(".g_item > ul > li").on('click',function(){
		$(this).addClass("on").siblings().removeClass("on");
		idx = $(this).index()+1;
		$("tab-content > ul").animate({
			"left":-300*idx+"px"
		},1000);
	});

});










