$(document).ready(function(){
	
	$(".top-bar> .top-bar-nav > ul > li").click(function(){
		var thisIndex = $(this).index();
		
		if($(".nav-content").eq(thisIndex).hasClass("active")){
			$(".nav-2-depth-wrap").removeClass("active");
			$(".nav-content").eq(thisIndex).removeClass("active");
			$(".top-bar> .top-bar-nav > ul > li").removeClass("active");
			$(this).removeClass("active");
		}
		
		else{
			$(".nav-2-depth-wrap").addClass("active");
			$(".nav-content").siblings().removeClass("active");
			$(".nav-content").eq(thisIndex).addClass("active");
			$(".top-bar> .top-bar-nav > ul > li").removeClass("active");
			$(this).addClass("active");
		}
	});
	
	$(".nav-right").click(function(){
		
		$(".nav-content").removeClass("active");
		$(".nav-2-depth-wrap").removeClass("active");
		$(".top-bar> .top-bar-nav > ul > li").removeClass("active");
		
	});
	
	$(".hover-box").hover(function(){
		$(this).toggleClass('active');
		
	});
	
});