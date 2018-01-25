	function Magnifier(){
		this.init()
	}
	Magnifier.prototype={
		constructor:Magnifier,
		init:function(){
			var _this=this
			
			$(".big-img").on("mouseover",function(){
				_this.showhide("block")
			})
			$(".big-img").on("mouseout",function(){
				_this.showhide("none")
			})
			this.move_focus()
		},
		showhide:function(status){
			$(".grayBox").css({
				display:status,
				opacity:"0.5",
				width:200,
				height:200,
				left:0,
				top:0
			})
			$(".big").css({
				display:status
			})
		},
		move_focus:function(){

			$(".big-img").on("mousemove",function(event){
				var e = event || window.event;
				var left = e.offsetX - $(".grayBox").width() / 2;
				var sTop = e.offsetY - $(".grayBox").height() / 2;
				
				/*边界检测 -start*/
				left = left <= 0 ? 0 : left;
				sTop = sTop <= 0 ? 0 : sTop;

				var maxLeft = $(".big-img").width() - $(".grayBox").width();
				var maxTop = $(".big-img").height() - $(".grayBox").height();

				left = left >= maxLeft ? maxLeft : left;
				sTop = sTop >= maxTop ? maxTop : sTop;
				/*边界检测 -end*/

				$(".grayBox").css({
					left:left+20 + "px"
				})
				$(".grayBox").css({
					top:sTop + "px"
				})

				//大图运动;
				$propX = $(".big").width() / $(".grayBox").width();
				$propY = $(".big").height() / $(".grayBox").height();

				if(!$propX || !$propY){
				return 0;
				}

				var bigLeft = left * $propX;
				var bigTop = sTop * $propY;

				$(".big img").css({
					left:-bigLeft + "px",
					top:-bigTop + "px"
				})
			})
		},
		move_wheel:function(){

		}
	}
   new Magnifier()