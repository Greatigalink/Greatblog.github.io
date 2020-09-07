<template>
	 <div id="home-auto">
      <blog-head></blog-head>
      <div class="home-body">
        <Recd-blog></Recd-blog>
        <section class="home-aside">
          <Hot-Art></Hot-Art>
          <Recd-link></Recd-link>
        </section>
      </div>
      
      <div class="home-body-onroad">
        <header>感谢您访问小站~~~</header>
        <article>目前网站还在开发中......欢迎给我留言哦</article>
        <footer><span @click="jumpLySay()">去给博主留言</span></footer>
      </div>
	 </div>
</template>
<script>
  import Header from '../function/Home/Header.vue'
  import Recdblog from './blogbody/Home/recommendblog.vue'
  import HotArt from '../function/Home/hotart'
  import RecdLink from '../function/Home/recdlink'
  import {mapState} from 'vuex'
	export default {
		name: 'BlogHome',
		components: {
      'blog-head': Header,
      'Recd-blog': Recdblog,
      'Hot-Art': HotArt,
      'Recd-link': RecdLink
		},
    data:function() {
      return {
        autest:''
      }
    },
    mounted() {
      if((document.getElementsByClassName('home-body-onroad')[0].offsetTop - this.scrollTop) < 700) this.footTop = true;
      if(this.$route.path != '/bloghome') {
        this.$message({
          showClose: true,
          message: '找不到指定页面，重新跳转至首页，有问题留言哦',
          type: 'warning'
        });
      }
    },
    computed: {
      ...mapState({
        scrollTop: state => state.docScrollTop
      })
    },
    methods:{
      jumpLySay() {
        this.$router.push({
            path: '/blogabout',
            name: 'blogabout',
            params: {
              turnOnLy: true
            }
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
  .home-body {
    min-height: 500px;
    padding: 10px 5% 10px 5%;
    background-color: #f5f5f5;
    display: flex;
  }
  .home-aside {
    margin-top: 20px;
    flex: 1;
  }
  .home-body-onroad {
    margin: 0px;
    height: 200px;
    text-align: center;
    background-color: white;
    color: #4e342e;
  }
  .home-body-onroad header {
    padding: 20px;
    font-size: 23px;
  }
  .home-body-onroad article {
    padding: 15px;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .home-body-onroad span {
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.5s;
  }
  .home-body-onroad span:hover {
    background-color: #ef5350;
    color: white;
    border-color: white;
  }
  @media screen and (max-width: 950px) and (min-width: 680px) {
    .home-aside {
      margin-top: 0px;
      flex: 1;
    }
  }
  @media screen and (max-width: 680px) {
    .home-body {
      flex-direction: column;
    }
  }
</style>
