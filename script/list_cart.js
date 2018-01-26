(function($){
	function Shopping(){
		this.init()
	}
	Shopping.prototype = {
		constructor:Shopping,
		init:function(){
			this.display()
			var _this = this

			//console.log(this.get_shop_item()[0].num)
			if($.cookie("shopping_car")){
				if($(".index-Hshopping span")){
					$(".index-Hshopping span").html(this.get_shop_item()[0].num)	
				}
				if($(".ipt-num")){
					$(".ipt-num").val(this.get_shop_item()[0].num)	
					console.log($(".ipt-num"),$(".num-add"),this.get_shop_item()[0].num)
					$(".num-add").on("click",function(){
						if($.cookie("shopping_car")){
							_this.get_shop_item()[0].num = _this.get_shop_item()[0].num + 1;
							return $(".ipt-num").val(_this.get_shop_item()[0].num);
						}
					})

				}
			}
			
		},
		get_shop_item:function(){
			if($.cookie("shopping_car")){
				return JSON.parse($.cookie("shopping_car"))
			}

		},
		add:function(){
			if($.cookie("shopping_car")){
				this.get_shop_item()[0].num ++;
				return $(".ipt-num").val(this.get_shop_item()[0].num);
			}
		},
		display:function(){
			if ($.cookie("shopping_car")) {
				$(".shopping-cart").css({
					display:'block'
				})
				$(".no-goods").css({
					display:'none'
				})
			}else{
				$(".shopping-cart").css({
					display:'none'
				})
				$(".no-goods").css({
					display:'block'
				})
			}
		}
		
	}

	 new Shopping()

})($)
