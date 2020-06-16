<template>
  <div id="app" :style="bkcolor">
    <router-view></router-view>
    <div id="bottom">
      <blog-bottom></blog-bottom>
    </div>
    <header id="guide"  :style="guideStyle">
      <blog-guide></blog-guide>
    </header>
    <section class="app-scroll">
      <el-backtop></el-backtop>
    </section>
  </div>
  
</template>

<script>
  import Guide from './components/function/Guide.vue'
  import Bottom from './components/function/Bottom.vue'
  import {Backtop} from 'element-ui'

  export default {
    name: 'App',
    components: {
      'blog-guide': Guide,
      'blog-bottom': Bottom,
      ElBacktop: Backtop
    },
    data:function() {
      return {
        bkcolor: '',
        guideStyle: {
          top: document.documentElement.clientWidth > 530 ? '50px' : '0px',
          left: document.documentElement.clientWidth > 530 ? '7%' : '0%'
        },
        transp: 0.6,
        mob: false,
        timerTop: null,
        timerWidth: null,
        timeTSum: 0,
        timeWSum: 0,
        headerColor: [
          {one: 'rgba(255,154,68,',two: 'rgba(252,96,118,'},
          {one: 'rgba(139,170,170,',two: 'rgba(174,139,156,'},
          {one: 'rgba(31,31,31,',two: ''},
          {one: 'rgba(247,112,98,',two: 'rgba(254,225,64,'},
          {one: 'rgba(230,185,128,',two: 'rgba(234,205,163,'},
          {one: 'rgba(37,128,179,',two: 'rgba(255,224,130,'}
        ]
      }
    },
    watch: {
      '$route': 'changeHeaderColor',
      timeTSum: function(n,o) {
        if(n > 5){
          clearTimeout(this.timerTop);
          this.timeTSum = 0;
          this.judgeGuideColor();
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.listenerTop);
      window.addEventListener('resize', this.ListenerDocWidth);
      this.changeHeaderColor();
    },
    methods: {
      listenerTop() {
        clearTimeout(this.timerTop);
        this.timeTSum ++;
        this.timerTop = setTimeout(() => {
          this.judgeGuideColor();
        },500);
      },
      judgeGuideColor() {
        var docheight = document.documentElement.scrollTop;
        var docwidth = document.documentElement.clientWidth;
        this.sumH = 0;
        if(docwidth > 530) {
          this.$store.commit('setterScrollTop', {scrolltop: docheight})
          this.reToScroll();
        }
        else {
          var mobildheight = document.body.scrollTop;
          this.$store.commit('setterScrollTop', {scrolltop: mobildheight})
        }
      },
      ListenerDocWidth() {
        var docwidth = document.documentElement.clientWidth;
        this.sumW = 0;
        this.$store.commit('setterWidth',{width: docwidth});
        this.guideStyle.top = docwidth > 530 ? '50px' : '0px';
        this.guideStyle.left = docwidth > 530 ? '7%' : '0%';
        this.changeHeaderColor();
      },
      changeHeaderColor() {
        var w = this.$store.state.docWidth;
        this.transp = w < 470 ? 0 : 0.9;
        var n = this.$store.getters.getNowPathId(this.$route.path);
        var color = {backgroundImage: 'linear-gradient(110deg,' + this.headerColor[n - 1].one + this.transp + '),' + this.headerColor[n - 1].two + this.transp + ')'};
        this.bkcolor = color;
        if(w > 530){
          this.guideStyle.top = '50px';
          this.guideStyle.left = '7%';
        }
      },
      reToScroll() {
        var docheight = document.documentElement.scrollTop;
        this.guideStyle.top = docheight > 200 ? '0px' : '50px';
      }
    }
}
</script>

<style>
  body {
    margin: 0px;
    padding: 0px;
    background: url(http://101.37.83.157:3000/images/backimg/pchome.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow-y: scroll;
  }
  #app {
    margin: 100px 7% 0px 7%;
  }
  #guide {
    position: fixed;
    height: 55px;
    width: 86%;
    background-color: white;
  }
  #bottom {
    background-color: #ECECEC;
  }
  .app-scroll {
    overflow-x: hidden;
  }
  @media screen and (max-width: 530px) {
    body {
      background: url(http://101.37.83.157:3000/images/backimg/mobilehome.jpg);
      background-size: 100% 400px;
    }
    #app {
      margin: 0px;
    }
    #guide {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
    }
  }
</style>
