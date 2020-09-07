<template>
  <div id="app" :style="bkcolor">
    <div v-if="!isLoading" class="app-loding">
      <section></section>
    </div>
    <router-view v-else></router-view>
    <div id="bottom">
      <blog-bottom></blog-bottom>
    </div>
    <header id="guide">
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
        isLoading: false,
        bkcolor: '',
        test: false,
        transp: 0.6,
        mob: false,
        isFunc: true,
        timerTop: null,
        timerWidth: null,
        timeWSum: 0
      }
    },
    mounted() {
      this.loadBackImg();
      window.addEventListener('scroll', this.listenerTop);
      window.addEventListener('scroll', this.startTop);
      window.addEventListener('resize', this.ListenerDocWidth);
    },
    methods: {
      loadBackImg() {
        let that = this;
        var imgSrcs = ['/homeBack1.jpg','/homeBack2.jpg','/homeBack3.jpg'],
            i = 0,
            timer = null,
            len = imgSrcs.length,
            loadImg = function(src) {
              if(i < len) {
                var imgObject = new Image();
                imgObject.src = 'http://101.37.83.157:3000/images/headback' + src;
                timer = setInterval(() => {
                  if(imgObject.complete) {
                    clearInterval(timer);
                    loadImg(imgSrcs[++i]);
                  }
                },100);
              }
              else {
                that.isLoading = true;
                window.scrollTo(0,0);
              }
            };
        loadImg(imgSrcs[i]);
      },
      listenerTop() {
        if(this.timerTop) clearTimeout(this.timerTop);
        this.timerTop = setTimeout(() => {
          this.judgeGuideColor();
        },1000);
      },
      startTop() {
        if(!this.isFunc) {
          return false;
        }
        this.isFunc = false;
        setTimeout(() => {
          this.judgeGuideColor()
          this.isFunc = true;
        }, 400);
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
      },
      reToScroll() {
        var docheight = document.documentElement.scrollTop;
      }
    }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    overflow-y: auto !important;
    padding-right: 0 !important;
  }
  #app {
    margin: 0;
  }
  #guide {
    position: fixed;
    top: 0px;
    left: 0%;
    height: 60px;
    width: 100%;
  }
  #bottom {
    background-color: #ECECEC;
  }
  .app-scroll {
    overflow-x: hidden;
  }
  .app-loding {
    height: 700px;
    text-align: center;
  }
  .app-loding section {
      margin: 300px 0 0 735px;
      width: 50px;
      height: 50px;
      border-left: 5px #ef5350 solid;
      border-right: 5px solid #26c6da;
      border-top: 5px solid #388e3c;
      border-bottom: 5px solid #ff9800;
      border-radius: 50%;
      animation: loading 1s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.3);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
  @media screen and (max-width: 530px) {
    body {
      background-size: 100% 330px;
    }
    #app {
      margin: 0px;
    }
    #guide {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 60px;
    }
    .app-loding {
      height: 700px;
      text-align: center;
    }
    .app-loding section {
      margin: 230px 0 0 150px;
    }
  }
</style>
