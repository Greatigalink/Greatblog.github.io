Vue.component('blog-content',{
	props:['post'],
	template:'<div id="content">'+
				'<h3 id="title">{{post.title}}</h3>'+
				'<p style="color:#A4B3B6;">{{post.con}}</p>'+
				'<p style="color:#A4B3B6;">{{post.time}}</p>'+
			 '</div>'
	});
var hg = Vue.component('head-guide',{
	props:['guide'],
	template:'<div id="guide-content"  @mouseenter="enter($event)" @mouseleave="output($event)">'+
				'<b>{{guide.name}}</b>'+
			 '</div>',
	data:function(){
		return {
		}
	},
	methods:{
		enter(e) {
			e.target.style.backgroundColor = "#C96567";
			e.target.style.color = "#EEE2DC";
			// e.target.style.opacity = 1;
		},
		output(e) {
			e.target.style.backgroundColor = "#EEE2DC";
			e.target.style.color = "#C96567";
			// e.target.style.opacity = 0.6;
		}
	}
});