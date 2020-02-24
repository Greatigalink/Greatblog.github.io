var coloralter = 0;
new Vue({
	el:'#Content-blog',
	data:{
		posts:[
			{id:1,title:'第一条博文，关于Greatlink博文建立的细节...',con:'暂时没有',time:'2020/2/7'},
			{id:2,title:'学习Vue框架下的前端开发...',con:'加油！',time:'2020/2/10'},
			{id:3,title:'博客还在开发中',con:'今天做了一下网站样式',time:'2020/2/11'},
			{id:4,title:'今天是第二天，继续开发完善功能...',con:'天气蛮好',time:'2020/2/13'},
			{id:5,title:'我四级终于过了，这是第三次考了',con:'开心！',time:'2020/2/21'}
			]
		}
});

var ahor_bd = new Vue({
	el:'#p',
	data:{
		athor:{backgroundColor:'#C96567'}
	}
});

var g_bd = new Vue({
	el:'#guide',
	data:{
		guides:[
			{name:'Home'},
			{name:'Apport'},
			{name:'About Blog'}
		],
		acstyle:{color:'#C96567'}
	}
});
// g_bd.acstyle = {color:'green'}
function Active(e){
	coloralter+=e;
	if(coloralter>2)coloralter=0;
	else if(coloralter<0)coloralter=2;
	Col = '';
	if(coloralter==1) Col='green';
	else if(coloralter==2) Col='black';
	else if(coloralter==0) Col='#C96567';
	ahor_bd.athor = {backgroundColor:Col};
	g_bd.acstyle = {color:Col};
}
