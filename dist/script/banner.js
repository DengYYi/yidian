// 轮播图
define(["jquery"],function(){
	function Banner(){

	}
	Banner.prototype = {
		constructor:Banner,
		init:function(){
			this.reload();
		},
		reload:function(){
			//console.log("1")
			var _this = this;
			$.ajax({
				url: 'json/banner.json',
				type: 'GEt'
			})
			.then(function(res) {
				//console.log(res)
				_this.create(res)
			})
		},
		create:function(data){
			for(i=0;i<data.length;i++){
				let $html = "<li>"+
								"<a href="+'product.html'+">"+
									"<span style="+'"'+"background\: url("+data[i].url+") center top no-repeat"+'"'+">"+
									"</span>"+
								"</a>"+
							"</li>"
				//console.log(i);			
				$($html).appendTo($(".loop_logo"))
			}
			this.next()
			this.prev()
			let timer;
			let _this = this
			let index = 0;
			let out = 0;
			timer = setInterval(function(){
				
				if (index == $(".loop_logo li").length-1) {
					index = 0;
				}else{
					index ++;
				}
				console.log('')
				let $width = $(".loop_logo li").width();
				//入场元素
				$(".loop_logo li").eq(index).css({
					left:-$width,
					zIndex:1
				})
				.animate({
					left:0
				})
				.siblings().css({
					zIndex:0
				})

				//出场元素
				if (index == 0) {
					out = $(".loop_logo li").length-1
				}else{
					out = index - 1
				}
				$(".loop_logo li").eq(out).css({
					left:0,
					zIndex:1
				})
				.animate({
					left:$width
				})
				.siblings().css({
					zIndex:0
				})
			}, 5000)

		},
		next:function(){
			let index = 0;
			let out = 0;

			$(".banner-next").on("click",function(){
				if (index == $(".loop_logo li").length-1) {
					index = 0;
				}else{
					index ++;
				}
				let $width = $(".loop_logo li").width();
				//入场元素
				$(".loop_logo li").eq(index).css({
					left:$width,
					zIndex:1
				})
				.animate({
					left:0
				})
				.siblings().css({
					zIndex:0
				})

				//出场元素
				if (index == 0) {
					out = $(".loop_logo li").length-1
				}else{
					out = index - 1
				}
				$(".loop_logo li").eq(out).css({
					left:0,
					zIndex:1
				})
				.animate({
					left:-$width
				})
				.siblings().css({
					zIndex:0
				})
				console.log(index,out)
			})
		},
		prev:function(){
			let index = 0;
			let out = 0;

			$(".banner-prev").on("click",function(){
				if (index == $(".loop_logo li").length-1) {
					index = 0;
				}else{
					index ++;
				}
				let $width = $(".loop_logo li").width();
				//入场元素
				$(".loop_logo li").eq(index).css({
					left:-$width,
					zIndex:1
				})
				.animate({
					left:0
				})
				.siblings().css({
					zIndex:0
				})

				//出场元素
				if (index == 0) {
					out = $(".loop_logo li").length-1
				}else{
					out = index - 1
				}
				$(".loop_logo li").eq(out).css({
					left:0,
					zIndex:1
				})
				.animate({
					left:$width
				})
				.siblings().css({
					zIndex:0
				})
				console.log(index,out)
			})
		}
	}
	return new Banner();
})