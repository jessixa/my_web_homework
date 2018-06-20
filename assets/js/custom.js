/*------------------------------------------------------------------
Project:    Balance Single Page Theme
Author:     Frank John
Version:    1.0
-------------------------------------------------------------------*/



/*============================================== /*
		Loader
/*============================================== */

$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})



/*============================================== /*
		Navigation Bar
/*============================================== */

/* Auto close navbar on click (mobile menu) */

$(".navbar-nav > li > a").click(function() {
    $(".navbar-collapse").collapse('hide');
});


/* Change navbar class on scroll */

$(".wrapper").waypoint(function() {
    $(".navbar").toggleClass("js-navbar-top");
    $(".navbar.js-toggleClass").toggleClass("navbar-default navbar-inverse");
    return false;
}, { offset: "-20px" });


/* Change navbar class on collapse/uncollapse in its top position */

$('.wrapper .navbar-collapse').on('show.bs.collapse', function () {
    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});

$('.wrapper .navbar-collapse').on('hide.bs.collapse', function () {
    $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
    $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});

/**
 * Smooth scroll to anchor
 */

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 20) // 20px offset for navbar menu
                }, 1000);
                return false;
            }
        }
    });
});


/*==============================================/*
		 Video popup, Gallery
/*==============================================*/

$('.video-popup').magnificPopup({
    type: 'iframe',
  });

//For video Section
$('.video-pop-up').magnificPopup({
    type: 'iframe',
  });




/* ==============================================
        Owl Carousel
=============================================== */

		 $("#carousel-our-clients").owlCarousel({
     stopOnHover: true,
        navigation: false,
				pagination:false,
        paginationSpeed: 1000,
        goToFirstSpeed: 3500,
	slideSpeed : 800,
        autoPlay: 3000,
        items : 5,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [979,3],
		itemsTablet :	[768,3],
		itemsMobile :	[479,2],

    });	
		

/* ====================================================================== */
/*	//Parallax using Stellar
/* ====================================================================== */	

  $(window).stellar({
        horizontalScrolling: false,
        responsive: true,
        scrollProperty: 'scroll',
        parallaxElements: false,
        horizontalOffset: 0,
        verticalOffset: 0
      });
			
			

/* ==============================================
        Facts and figures Counters
=============================================== */
		
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/* ==============================================
  A JQuery plugin for fluid width video embeds
=============================================== */

   $('body').fitVids();

/* ==============================================
Resize Function For Full width image text column
=============================================== */
var resizeBackground = function() {

			$( ' .two-cols-description-image > img' ).each(function( i, el ) {

				var $el       = $( el ),
					$section  = $el.parent(),
					min_w     = 350,
					el_w      = el.tagName == 'VIDEO' ? el.videoWidth : el.naturalWidth,
					el_h      = el.tagName == 'VIDEO' ? el.videoHeight : el.naturalHeight,
					section_w = $section.outerWidth(),
					section_h = $section.outerHeight(),
					scale_w   = section_w / el_w,
					scale_h   = section_h / el_h,
					scale     = scale_w > scale_h ? scale_w : scale_h,
					new_el_w, new_el_h, offet_top, offet_left;

				if ( scale * el_w < min_w ) {
					scale = min_w / el_w;
				}

				new_el_w = scale * el_w;
				new_el_h = scale * el_h;
				offet_left = ( new_el_w - section_w ) / 2 * -1;
				offet_top  = ( new_el_h - section_h ) / 2 * -1;

				$el.css( 'width', new_el_w );
				$el.css( 'height', new_el_h );
				$el.css( 'marginTop', offet_top );
				$el.css( 'marginLeft', offet_left );
			});

		};

		$(document).ready(function() {
			resizeBackground();
		});
		
        $(window).load(function() {
           resizeBackground();
        });
        
        $( window ).resize(function() {
          resizeBackground();
       });
        
        /* ---------------------------------------------- /*
        * FULL SCREEN DIVS
        /* ---------------------------------------------- */
        
       $(document).ready(function() {
			$(".fl_scrn").css("width", $(window).width());
           $(".fl_scrn").css("height", $(window).height());
		});
        
         $( window ).resize(function() {
          $(".fl_scrn").css("width", $(window).width());
           $(".fl_scrn").css("height", $(window).height());
       });
 		/* ---------------------------------------------- /*
		 * WOW ANIMATION
		/* ---------------------------------------------- */        
          new WOW().init();
		/* ---------------------------------------------- /*
		 * Scroll top
		/* ---------------------------------------------- */

		$(window).scroll(function() {
			if ($(this).scrollTop() > 300) {
				$('.scroll-up').addClass('scroll-top-show');
			} else {
				$('.scroll-up').removeClass('scroll-top-show');
			}
		});

		$('a[href="#totop"]').on('click', function() {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			return false;
		});

 $(function(){ //页面加载完毕才执行
    
        //=========设置参数==========
        //图片统一高度：
        var images_height = '590px';
        //图片路径/链接(数组形式):
        var images_url = [
          'assets/images/parallax/intro-1.jpg',
          'assets/images/parallax/intro-2.jpg',
          'assets/images/parallax/intro-3.jpg'
        ];
        var images_count = images_url.length;
        //console.log(images_count);
    
        //创建节点
        //图片列表节点
        for(var j=0;j<images_count+1;j++){
          $('.banner ul').append('<li></li>')
        }
        //轮播圆点按钮节点
        for(var j=0;j<images_count;j++){
          if(j==0){
            $('.banner ol').append('<li class="current"></li>')
          }else{
            $('.banner ol').append('<li></li>')
          }
        }
    
        //载入图片
        $('.banner ul li').css('background-image','url('+images_url[0]+')');
        $.each(images_url,function(key,value){
          $('.banner ul li').eq(key).css('background-image','url('+value+')');
        });
    
        $('.banner').css('height',images_height);
    
        $('.banner ul').css('width',(images_count+1)*100+'%');
    
        $('.banner ol').css('width',80+'px');
        $('.banner ol').css('margin-left',-images_count*20*0.5-10+'px');
    
        //=========================
    
        var num = 0;
        //获取窗口宽度
        var window_width = $(window).width();
        $(window).resize(function(){
          window_width = $(window).width();
          $('.banner ul li').css({width:window_width});
          clearInterval(timer);
          nextPlay();
          timer = setInterval(nextPlay,2000);
        });
        //console.log(window_width);
        $('.banner ul li').width(window_width);
        //轮播圆点
        $('.banner ol li').mouseover(function(){//用hover的话会有两个事件(鼠标进入和离开)
          $(this).addClass('current').siblings().removeClass('current');
          //第一张图： 0 * window_width
          //第二张图： 1 * window_width
          //第三张图： 2 * window_width
          //获取当前编号
          var i = $(this).index();
          //console.log(i);
          $('.banner ul').stop().animate({left:-i*window_width},500);
          num = i;
        });
        //自动播放
        var timer = null;
        function prevPlay(){
          num--;
          if(num<0){
            //悄悄把图片跳到最后一张图(复制页,与第一张图相同),然后做出图片播放动画，left参数是定位而不是移动的长度
            $('.banner ul').css({left:-window_width*images_count}).stop().animate({left:-window_width*(images_count-1)},500);
            num=images_count-1;
          }else{
            //console.log(num);
            $('.banner ul').stop().animate({left:-num*window_width},500);
          }
          if(num==images_count-1){
            $('.banner ol li').eq(images_count-1).addClass('current').siblings().removeClass('current');
          }else{
            $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
    
          }
        }
        function nextPlay(){
          num++;
          if(num>images_count){
            //播放到最后一张(复制页)后,悄悄地把图片跳到第一张,因为和第一张相同,所以难以发觉,
            $('.banner ul').css({left:0}).stop().animate({left:-window_width},500);
            //css({left:0})是直接悄悄改变位置，animate({left:-window_width},500)是做出移动动画
            //随后要把指针指向第二张图片,表示已经播放至第二张了。
            num=1;
          }else{
            //在最后面加入一张和第一张相同的图片，如果播放到最后一张，继续往下播，悄悄回到第一张(肉眼看不见)，从第一张播放到第二张
            //console.log(num);
            $('.banner ul').stop().animate({left:-num*window_width},500);
          }
          if(num==images_count){
            $('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
          }else{
            $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
    
          }
        }
        timer = setInterval(nextPlay,2000);
        //鼠标经过banner，停止定时器,离开则继续播放
        $('.banner').mouseenter(function(){
          clearInterval(timer);
          //左右箭头显示(淡入)
          $('.banner i').fadeIn();
        }).mouseleave(function(){
          timer = setInterval(nextPlay,2000);
          //左右箭头隐藏(淡出)
          $('.banner i').fadeOut();
        });
        //播放下一张
        $('.banner .right').click(function(){
          nextPlay();
        });
        //返回上一张
        $('.banner .left').click(function(){
          prevPlay();
        });
      });

 // shopping center
$(document).ready(function () {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default',
        width: 'auto',
        fit: true,
        closed: 'accordion',
        activate: function(event) {
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });
});