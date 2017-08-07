function video_mask(type,obj){
	if(type){
		$('<a class="video_mask" href="javascript:;"></a>').appendTo(obj);
	}else{
		$(obj).find('.video_mask').remove();
	}
}

