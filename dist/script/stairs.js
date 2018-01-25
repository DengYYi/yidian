define(["jquery"],function(){
	// var a = $(".title");
	// console.log(a);
	
	function Stairs(){

	}
	Stairs.prototype={
		init:function(){
			this.stair();
		},
		stair:function(){
			this.i;
			var _this=this
			$(document).scroll($.proxy(this.scroll,this));
			$("li",".floor-direct").on("click",function(){
					_this.i=$(this).index();
					//console.log(_this.i)
					_this.move()
			})
		},
		scroll:function(){
				//console.log(this)
				var minh = $(".hot-model").offset().top - 90;
				var maxh = $(".cooper-partner").offset().top - 100;
				var mixtop=document.documentElement.scrollTop||document.body.scrollTop;
				if (mixtop>=minh&&mixtop<=maxh) {

					$(".floor-direct").fadeIn(0);

					for(var j=0;j<$(".num").length;j++){
						$(".num").eq(j).css({
						    display:"block"
					    })
					    $(".word").eq(j).css({
							display:"none"
						})
					}

					this.i = Math.floor(($(document).scrollTop()-minh) / 437);

					$(".word").eq(this.i ).css({
						display:"block"
					})

					$(".num").eq(this.i ).css({
						display:"none"
					})
					//console.log(this.i );
				}else{
					$(".floor-direct").fadeOut(0);
				}
			},
			move:function(){
				//console.log(this);
				if (this.i==0||this.i==1) {
					var minh = $(".hot-model").offset().top - 90;
				}else if(this.i==6){
					var minh = $(".hot-model").offset().top - 15;	
				}else{
					var minh = $(".hot-model").offset().top -55;	
				}

				var a=this.i*437+minh

				//document.documentElement.scrollTop=a
				$("body,html").animate({"scrollTop":a},200)
				
			}

	}

	return new Stairs();
})
