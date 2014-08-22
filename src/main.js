$(function(){
	var myElement = document.querySelector("header");
// 创建 Headroom 对象，将页面元素传递进去
var headroom  = new Headroom(myElement);
// 初始化
headroom.init();
var respath = "res/";
//img目录
var imageDic = [
{url:"1.jpg",name:"1雷诺阿"},
{url:"2.jpg",name:"2莫奈"},
{name:"3莫奈的下半生",url:"3.jpg"},
{
	url:"4.jpg",
	name:"4光影大师"
},
{
	url:"5.jpg",
	name:"5黄金之吻"
},
{url:"6.jpg",name:"6疯子"},
{url:"7.jpg",name:"7奇才"},
{url:"8.jpg",name:"8彩虹"},
{url:"9.jpg",name:"9逃犯上"},
{url:"10.jpg",name:"10逃犯下"},
{url:"11.jpg",name:"11奇才"}
];
var nowImageUrl=""
var nowImageIndex = 0;
var ImageUrlArray = [];
var allImageNum = imageDic.length;

function urlAtIndex(num){
	var obj = imageDic[num];
	return obj['url'];
}
function loadImageDic(){
	for (var i = imageDic.length - 1; i >= 0; i--) {
		var obj = imageDic[i];
		var li = '<li><a class="btn imgsrc" imgindex="'+i+'" imgsrc="'+obj['url']+'">'+obj['name']+'</a></li>'
		$("#muluDiv").prepend(li);
	};
	
}
loadImageDic();
function loadImageAtIndex(num){

	if(loadImageUrl(urlAtIndex(num))){
		nowImageIndex = parseInt(num)
		$(".imgsrc").css("color","black")
		$(".imgsrc").eq(num).css("color","red")
		document.body.scrollTop = 0;
	}
}
loadImageAtIndex(0);
//目录
$("#mulu").click(function(){
	$.layer({
		type: 1,
		area:  ['460px', '280px'],
		title: false,
		border: [0],
		shadeClose: true,
		page: {dom : '#muluDiv'}
	});
})
function loadImageUrl(url){
	if (!url) {
		return false;
	};
	url = respath+url
	changeImageUrl(url);
	return true;

}
$(".imgsrc").click(function(){

	var index = $(this).attr("imgindex");
	loadImageAtIndex(index);

})
 // 上一条
 $("#beforeItem").click(function(){
 	var num = nowImageIndex -1;
 	if (num <0){
 		alert("这是第一条了")
 	}else{
 		loadImageAtIndex(num)
 	}
 })
 //下一条
 $("#nextItem").click(function(){
 	var num = nowImageIndex +1;
 	if (num >=allImageNum){
 		alert("这是最后一条了")
 	}else{
 		loadImageAtIndex(num)
 	}
 })
 function  changeImageUrl(url){
 	$("#showplace").attr("src",url);
 	html = $("#container").html();
 	$("#showplace").remove();
 	
 	$("#container").append(html);
 	$("#showplace").load(function(){
 		imgloaded();
 	})
 }
 function imgloaded(){
 	
 }
 	// $("#showplace")[0].onload =function(){
 	// 	alert("ok")
 	// }
 })
