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
			url: 'json/yidianzu.json',
			type: 'GEt'
		})
		.then(function(res) {
			console.log(res)
			//_this.create(res)
		})	
	}

}
new List();