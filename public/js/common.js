jQuery(function ($) {
var navItem=0;
	jQuery(".menu-handler").click(function() {
				if(navItem == 0) {
					jQuery(this).addClass("active");
					jQuery("html").addClass("menuOpen");
					  $(".header").addClass("black");
					navItem = 1;
				} else {
					jQuery(this).removeClass("active");
					jQuery("html").removeClass("menuOpen");
					  $(".header").removeClass("black");
					navItem = 0;
				}
			});
	

	

	
	
	
		$(document).on("click", ".menuMoblie .nav-link", function(e) {
				var mnavcur = $(this);
				var mnavbox = $(this).parents("li");
				if(mnavbox.find(".subnav").length > 0) {
					if(mnavbox.hasClass("cur")) {
						mnavbox.find(".subnav").stop(false, false).slideUp();
						mnavbox.removeClass("cur");
					} else {
						jQuery(".menuMoblie li").removeClass("cur");
						jQuery(".subnav").stop(false, false).slideUp();
						mnavbox.find(".subnav").stop(false, false).slideDown();
						mnavbox.addClass("cur");
						e.preventDefault();
					}
				}
			});
	
	
	
	


});

$(".secNav .item2").click(function(){

		$(this).parent().find(".secNavTwo").slideToggle();

});
	
  function navFixed() {
            var mainTop;
       
            if ($(window).scrollTop() >50) {
                $("header").addClass("on");
            } else {
                $("header").removeClass("on");
            
            }
			
         
        
 }

  $(function () {
            window.count = 0;
            //导航吸顶
            navFixed();
			navInit();
            window.onscroll = function () {
              navFixed();
			  if (typeof(numberScroll) != "undefined") {
			
					 if ($(window).scrollTop() >1850 && numberScroll==0) {
					
					 digit.render() ;
					  numberScroll=1;
				
					
					  }
				}
         
			}

});

function navInit() {
		
	$("#nav li").hover(function(){
			
	  $(this).find('.xia').fadeIn("slow");

	},function(){
	  $(this).find('.xia').hide();
	});		


	
	
				
}






	$(".header").hover(function(){
			
	   $(".header").addClass("black");
	 
	},function(){
	  $(".header").removeClass("black");
	});	










 var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            
				
					$(".menu .item span").click(function(){

						if($(this).hasClass("active")){
							$(this).parent().find(".secNav").stop(false, false).slideUp();
							$(this).removeClass("active");
							
						}else{
							$(this).parent().find(".secNav").stop(false, false).slideDown();
							 $(this).addClass("active");
						}

					});
	
				
				
				
				
				
				
				
				
            } else {
				
				$(".menu .item").hover(function(){
			
				$(this).find('.secNav').addClass("active").siblings().removeClass("active");
		  
				$(this).addClass("active").siblings().removeClass("active");
				
				},function(){
					  $(this).find('.secNav').removeClass("active");
					  $(this).removeClass("active");

				});	
				
            
			
                
 }
 
 



 //获取url中的参数
 function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
}
 
            
//图片过渡加载
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	new WOW().init();
};