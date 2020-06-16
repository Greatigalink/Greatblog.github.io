<template>
  <div id="about-auto">
    <section class="about-head">
      <section class="about-author">
        <transition name="el-zoom-in-center">
          <aside v-show="hello" class="about-author-wel">
            <span>Hello, everyone!</span>
          </aside>
        </transition>
        <transition name="el-zoom-in-top">
          <aside v-show="name" class="about-author-name">
            <span>我是努力'向前</span>
          </aside>
        </transition>
      </section>
    </section>
    <section class="about-con">
      <about-blog></about-blog>
      <leave-say></leave-say>
      <section class="blogabout-ly-dis">
        <ly-display :nowType="{art: 'ly'}"></ly-display>
      </section>
    </section>
  </div>
</template>

<script>
  import BlogMessage from '../function/About/BlogMessage.vue'
  import LeaveSay from '../function/About/LeaveSay.vue'
  import displayList from '../function/artcomdisplay.vue'

  export default {
    name:'BlogAbout',
    components: {
      'about-blog': BlogMessage,
      'leave-say' : LeaveSay,
      'ly-display': displayList
    },
    data:function() {
      return {
        hello: false,
        name: false
      }
    },
    watch: {
      listenerLocal:function(newL, oldL) {//若发现在about页面点击留言则跳转
        if(newL) {
          this.reLocal();
        }
      }
    },
    computed: {
      listenerLocal() {
        return this.$store.state.reLocal;//监视是否在about页面点击留言
      }
    },
    mounted() {
      this.hello = true;
      this.name = true;
      if(this.$route.params.turnOnLy) { //若为留言点进来的就重新定位到留言模块
        this.reLocal();
      }
    },
    methods: {
      reLocal() {
        setTimeout(()=>{
          if(this.$store.state.docWidth > 930) {
            window.scrollTo(0,1250);
          }
          else {
            window.scrollTo(0,1750);
          }
        },0)
      }
    }
  }
</script>

<style>
  #about-auto {
  }
  .about-head {
    margin: 0px;
    height: 470px;
    padding: 1px;
  }
  .about-author {
    margin: 180px 7% 0px 7%;
    text-align: center;
    color: white;
    line-height: 30px;
  }
  .about-author-wel {
    font-size: 45px;
  }
  .about-author-name {
    margin-top: 20px;
    font-size: 1.25rem;
  }
  .blogabout-ly-dis {
    margin: 100px 0% 0px 0%;
    padding: 10px 10% 50px 10%;
    background-color: white;
  }
  @media screen and (max-width: 950px) {
    .about-head {
      height: 375px;
    }
    .about-author-wel {
      font-size: 37px;
    }
    .about-author-name {
      font-size: 17px;
    }
    .blogabout-ly-dis {
      margin: 100px 0px 0px 0px;
      padding: 10px 1% 50px 1%;
    }
  }
</style>
