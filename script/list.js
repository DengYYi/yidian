function List(){
	this.init()
}
List.prototype={
	constructor:List,
	init:function(){
		this.reload()
	},
	reload:function(){
	var _this = this;
		$.ajax({
			url: 'json/carts.json',
			type: 'GEt'
		})
		.then(function(res) {
			//console.log(res)
			_this.create(res)
		})	
	},
	create:function(data){
		for(var i = 0;i < data.length;i++){
			var $html = "<li>"+
							"<a href="+"product.html"+" target="+"_blank"+"data-id="+data[i].id+">"+
								"<img src="+data[i].src+">"+
								"<h3>短租-ThinkPad T420 极速版 14.0英寸笔记本电脑(i5/4GB/120GB SSD/集显)</h3>"+
								"<span>￥<strong>200</strong>/月</span>"+
							"</a>"+
						"</li>"
			$($html).appendTo($(".clearfix"))
		}
	}

}
new List();