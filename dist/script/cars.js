//购物车

(function($){
		function Shopping(){
			this.init($(".add-to-cart-btn"))
	}
	Shopping.prototype = {
		constructor:Shopping,
		init:function(ele){
			ele.on("click",$.proxy(this.set_shop_itme,this))
			ele.on("mouseup",$.proxy(this.create,this))
			$(".index-Hshopping span").html(this.get_shop_item()[0].num)
		},
		set_shop_itme:function(e){
			var dataId = $(e.target).attr("data-id");
			if($.cookie("shopping_car")){
				//增加一个值;
				var scookie = $.cookie("shopping_car");
				var acookie = JSON.parse(scookie);
				var flag = false;//代表是否存在数据;
				acookie.forEach(function(item){	
					if(item.id == dataId){
						//证明存在; ==> 数量自增;
						item.num++;
						flag = true;
					}
				})
				if(!flag){
					var item = {
						"id":dataId,
						"num":"1"
					}
					acookie.push(item);
				}
				scookie = JSON.stringify(acookie);
				$.cookie("shopping_car",scookie);

			}else{
				//建立一个结构;
				$.cookie("shopping_car",'[{"id":"'+dataId+'","num":"1"}]')
			}
			console.log(this.get_shop_item()[0].num);
			//$(".index-Hshopping span").html(this.get_shop_item()[0].num)
		},	
		get_shop_item:function(){
			if($.cookie("shopping_car")){
				return JSON.parse($.cookie("shopping_car"))
			}

		},
		// remove_shop_item:function(id){
		// 	var scookie = $.cookie("shopping_car");
		// 	if(scookie){
		// 		var acookie = JSON.parse(scookie);
		// 		/*bug** */
		// 		acookie.forEach(function(item,index){
		// 			if(item.id == id){
		// 				acookie.splice(index,1);
		// 			}
		// 		})
		// 	}
		// 	scookie = JSON.stringify(acookie);
		// 	$.cookie("shopping_car",scookie);
		// },
		create:function(){
			var $html = "<div class="+"success-tip animated fadeInUp"+">"+
							"<div class="+'tip-content'+">商品已成功加入购物车！</div>"+
							"<div class="+'btn-box'+">"+
							        "<a href="+'shoppingcar.html'+" class="+'btn'+">去购物车结算</a>"+
							        "<a href="+'javascript:;'+" class="+'close-tip'+">继续购物</a>"+
							"</div>"+
						"</div>"
				$(".rent-price").append($($html))
				$(".add-to-cart-btn").css({
					position:"relative"
				})
				$(".success-tip").css({
					    width: '294px',
					    height: '106px',
					    border: '1px solid #dbdbdb',
					    position: 'absolute',
					    borderRadius: '3px',
					    backgroundColor: '#fff',
					    left:"20%",
					    bottom:0,
					    zIndex: 999
				})
				
				$(".tip-content").css({
					height: '60px',
				    lineHeight: '60px',
				    paddingLeft: '68px',
				    background: 'url(https://resources.edianzu.com/mall_new/20180116_1/images/pic_chengg_03.png) no-repeat 18px center',
				    fontSize: '18px',
				    color: '#7abd54'
				})
				$(".btn-box").css({
					 textAlign: 'center'
				})
				$(".btn").css({
					marginRight: "10px",
				    padding: '3px 9px',
				    width: 'auto',
				    height: '24px',
				    lineHeight: '24px',
				    background: '#e64548',
				    fontSize: '14px',
				    textAlign: 'center',
				    borderRadius: '3px'
				})


				$(".close-tip").on("click",function(){
					$(".success-tip").fadeOut('1000')
				})
				.css({
					height: '24px',
				    lineHeight: '24px',
				    color: '#2874af'
				})
				//console.log($(".success-tip div"))

		}
	}

	 new Shopping()

})($)
