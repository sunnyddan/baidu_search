//设置框点位显示
$('#set_boxx').css({
	position:'absolute',
	top:$('#set_i').offset().top+27,
	left:$('#set_i').offset().left-28
});

//产品设置
$('#more_i').css({
	position:'absolute',
	top:0,
	left:$('#moreproduct_i').offset().left-6
});

//产品和设置二级菜单显示与隐藏
function set(obj,obj_1){
	var timer;
	obj.hover(function(){
		obj_1.show();
	},function(){
		timer=setTimeout(function(){
			obj_1.hide();
		},50);
	});
	obj_1.hover(function(){
		clearTimeout(timer);
	},function(){
		obj_1.hide();
	});
}
set($('#set_i'),$('#set_boxx'));
set($('#moreproduct_i'),$('#more_i'));

//下拉搜索菜单
$("#searchinput").bind('keyup',function(){
	var searchText=$('#searchinput').val();
	//$.get('http://suggestion.baidu.com/su?wd='+searchText,function(date){
	$.get('http://api.bing.com/qsonhs.aspx?q='+searchText,function(date){//获取下拉框列表
		var e=date.AS.Results[0].Suggests;
		var html='';
		for(var i=0;i<e.length;i++){
			html+='<li>'+e[i].Txt+'</li>';
		}
		$('#searchli').html(html);
		$("#searchset").show().css({
			position:'absolute',
			top:$("#fr").offset().top+$("#fr").height()+10,
			left:$('#fr').offset().left,
			width:$('#searchinput').width()+5
		});
	},'json');
})
$(document).bind('click',function(){/*点击页面任意位置，下拉框隐藏*/
	$('#searchset').hide();
})
//结果跳转
$('#searchli').delegate('li','click',function(){
	var Text=$(this).text();
	location.href='http://cn.bing.com/search?q='+Text;
});

