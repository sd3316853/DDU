
layui.define(['layer','element','laytpl','laydate','laypage','upload'], function(exports){
	 var layer = layui.layer;
	 

});
/*弹出框*/
// layui.use('layer', function(){

// });
/*播放mask*/
$.each($('.enterprise_video_ul .enterprise_video_dl'),function(i,val){
	$('.enterprise_video_ul .enterprise_video_dl:eq('+i+')').hover(function(){
		video_mask(1,$(this));
	},function(){
		video_mask(0,$(this));
	});
});
/*nav*/
$.each($('.enterprise_video_nav li'),function(i,val){
	$('.enterprise_video_nav li:eq('+i+')').click(function(){
		$(this).addClass('video_nav_active').siblings('li').removeClass('video_nav_active');
		console.log($('.enterprise_video_box'));
		$('.enterprise_video_box:eq('+i+')').show().siblings('div').hide();
	});
})
/*轮播*/
var focusBanner=function(){
	var $focusBanner=$("#focus-banner"),
		$bannerList=$("#focus-banner-list li"),
		$focusHandle=$(".focus-handle"),
		$bannerImg=$(".focus-banner-img"),
		$nextBnt=$("#next-img"),
		$prevBnt=$("#prev-img"),
		$focusBubble=$("#focus-bubble"),
		bannerLength=$bannerList.length,
		_index=0,
		_timer="";
		
		var _height=$(".focus-banner-img").find("img").height();
		$focusBanner.height(_height);
		$bannerImg.height(_height);

		$(window).resize(function(){
			window.location.reload()
		});

		for(var i=0; i<bannerLength; i++){
			$focusBubble.append("<li></li>");
		}
		$focusBubble.find("li").eq(0).addClass("current");
		var bubbleLength=$focusBubble.find("li").length;
		$focusBubble.css({
			"width":bubbleLength*80,
			"marginLeft":-bubbleLength*20
		});//初始化
		$focusBubble.delegate("li","click",function(){
			$(this).addClass("current").siblings().removeClass("current");
			_index=$(this).index();
			changeImg(_index);
		});//点击轮换

		function changeImg(_index){
			$bannerList.eq(_index).fadeIn(250).siblings().fadeOut(200);
			$focusBubble.find("li").removeClass("current");
			$focusBubble.find("li").eq(_index).addClass("current");
			clearInterval(_timer);
			_timer=setInterval(function(){$nextBnt.click()},5000);
		}//切换主函数
		_timer=setInterval(function(){$nextBnt.click()},5000)
}();











