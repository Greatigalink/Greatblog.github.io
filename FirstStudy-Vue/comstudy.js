
Vue.component('blog-content',{
	props:['post'],
	template:'<div id="content">'+
				'<h3>{{post.title}}</h3>'+
				'<p>{{post.con}}</p>'+
				'<p>{{post.time}}</p>'+
			 '</div>'
	});
Vue.component('head-guide',{
	props:['guide'],
	template:'<div id="guide-content" v-bind:class="active" @mouseenter="enter($event)" @mouseleave="output($event)">{{guide.name}}</div>',
	data:function(){
		return {
			active:""
		}
	},
	methods:{
		enter(e) {
			e.target.style.backgroundColor = "#C96567";
			console.log("Yes!")
		},
		output(e) {
			e.target.style.backgroundColor = "black";
			console.log("No!")
		}
	}
});
var blog=new Vue({
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
new Vue({
	el:'#guide',
	data:{
		guides:[
			{name:'Home'},
			{name:'Apport'},
			{name:'About Blog'}
		]
	},
	
})