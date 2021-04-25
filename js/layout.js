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
	
	$(".bar_fill").each(function(){
		var $this = $(this);
		var per = $this.attr('per');
		$this.css('width', per + "%");
	});
	
	var $header = $('header');
	var $page = $('.about_set');
	var $window = $(window);
	var pageOffsetTop = $page.offset().top;
	
	$window.resize(function(){
		pageOffsetTop = $page.offset().top;
	});
	
	$window.on('scroll', function(){
		var scrolled = $window.scrollTop() >= pageOffsetTop;
		$header.toggleClass('white', scrolled);
	});
	
	var gall = setInterval(galleryFun,2000);
	var inter = true;
	var idx = 2;
	
	function galleryFun(){
		
		$(".art_inner > ul").animate({
			"left":-320*idx+"px"
		},300);
		$(".g_item > ul > li").eq(idx-1).addClass("on").siblings().removeClass("on");
		idx++;
		if(idx> $(".art_inner > ul > li").length-1){
			$(".art_inner > ul").animate({
				"left":0
			},200);
			idx=0;
		}
	}
	
	$(".art_inner , .g_item").hover(function(){
		if(inter==true){
			clearInterval(gall);
			inter=false;
		}
	},function(){
		if(inter==false){
			gall = setInterval(galleryFun,2000);
			inter=true;
		}
	});
	
	$(".g_item > ul > li").on('click',function(){
		$(this).addClass("on").siblings().removeClass("on");
		idx = $(this).index()+1;
		$(".art_inner > ul").animate({
			"left":-320*idx+"px"
		},300);
	});
	
	var modals = document.getElementsByClassName("modal");
	var btns = document.getElementsByClassName("btn_more_2");
	var spanes = document.getElementsByClassName("c_btn");
	var funcs = [];
	
	function Modal(num) {
		return function(){
			btns[num].onclick = function(){
				modals[num].style.display = "block";
				return false;
			};
			
			spanes[num].onclick = function(){
				modals[num].style.display = "none";
			};
		};
	}
	
	for(var i = 0; i < btns.length; i++){
		funcs[i] = Modal(i);
	}
	
	for(var j = 0; j < btns.length; j++){
		funcs[j]();
	}
	
	window.onclick = function(event){
		if(event.target.className == "modal"){
			event.target.style.display = "none";
		}
	};
});