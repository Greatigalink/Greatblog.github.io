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
        <ly-display v-if="listLodding" :nowType="'留言列表'" :list="commentlist" @getterRy="getterRy(arguments)"></ly-display>
        <p v-else>无法加载留言,请刷新</p>
      </section>
    </section>
    <replay v-if="replay" :openRy="true" @closeRy="closeRy" :ryMsg="ryMsg"></replay>
  </div>
</template>

<script>
  import BlogMessage from '../function/About/BlogMessage.vue'
  import LeaveSay from '../function/About/LeaveSay.vue'
  import displayList from '../function/artcomdisplay.vue'
  import Replay from '../function/Replay.vue'

  export default {
    name:'BlogAbout',
    components: {
      'about-blog': BlogMessage,
      'leave-say' : LeaveSay,
      'ly-display': displayList,
      'replay': Replay
    },
    data:function() {
      return {
        hello: false,
        name: false,
        listLodding: false,
        replay: false,
        ryMsg: {},
        commentlist: [
          {
            _id: '45dfsdfs',
            Name: '努力', Content: '测试', Time: '2020-06-05 19:47',AvatarSrc: 'http://www.tzwlink.xyz/static/great.png',
            Replay: [
              {RyName: '投资广告', RyedName: '努力', Con: '厉害了', Time: '2020-06-15 14:51',AvatarSrc: 'https://www.modestfun.com:8080/img/?name=logo'},
              {RyName: '建立', RyedName: '小米', Con: '哈哈哈', Time: '2020-06-15 14:51',AvatarSrc: 'http://www.tzwlink.xyz/static/great.png'}
            ]
          },
          {
            _id: '45yfsdfs',
            Name: '努力\'向前', Content: '呀哈', Time: '2020-06-05 19:47',AvatarSrc: 'http://www.tzwlink.xyz/static/great.png',
            Replay: [
              {RyName: 'modest', RyedName: '努力\'向前', Con: '厉害了', Time: '2020-06-15 14:51',AvatarSrc: 'https://www.modestfun.com:8080/img/?name=logo'},
              {RyName: '努力\'向前', RyedName: 'modest', Con: '哈哈哈', Time: '2020-06-15 14:51',AvatarSrc: 'http://www.tzwlink.xyz/static/great.png'}
            ]
          }
        ]
      }
    },
    watch: {
      listenerLocal:function(newL, oldL) {//若发现在about页面点击留言则跳转
        if(newL) {
          this.reLocal();
        }
      },
      getSubLy:function(newLy, oldLy) {//检测留言提交动作，并触发留言列表更新
        if(newLy) {
          this.getLeaveList();
          this.$store.commit('setterSubLeaveSay', {subly: false});
        }
      }
    },
    computed: {
      listenerLocal() {
        return this.$store.state.reLocal;//监视是否在about页面点击留言
      },
      getSubLy() {
        return this.$store.state.subLeaveSay;//返回提交动作的记录状态
      }
    },
    mounted() {
      this.hello = true;
      this.name = true;
      this.getLeaveList();
      if(this.$route.params.turnOnLy) { //若为留言点进来的就重新定位到留言模块
        this.reLocal();
      }
    },
    methods: {
      getLeaveList() { //获取整个留言列表
        this.axios.post('/about/leavelist').then((response)=>{
          this.commentlist = response.data;
          this.listLodding = true;
        }).catch(err=>{
          alert('数据错误了，请刷新');
        });
      },
      getterRy(array) {
        this.ryMsg = {
          msg: array[0],
          type: array[1],
          belone: 'ly'
        }
        this.replay = true;
        // console.log(array)
      },
      closeRy() {
        this.replay = false;
      },
      reLocal() { //重定位到留言板位置
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
  .about-head {
    margin: 100px 8% 0 8%;
    height: 400px;
    padding: 1px;
    background: url(http://101.37.83.157:3000/images/headback/about.jpg);
    background-size: 100% 400px;
    background-repeat: no-repeat;
  }
  .about-author {
    margin: 120px 7% 0px 7%;
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
    margin: 0;
    padding: 10px 15% 50px 15%;
    background-color: white;
  }
  .blogabout-ly-dis p {
    text-align: center;
    color: #802022;
  }
  @media screen and (max-width: 950px) {
    .about-head {
      height: 270px;
      margin: 30px 2% 0 2%;
      background-size: 150% 330px;
    }
    .about-author-wel {
      font-size: 37px;
    }
    .about-author-name {
      font-size: 17px;
    }
    .blogabout-ly-dis {
      margin: 0px;
      padding: 10px 1% 50px 1%;
    }
  }
</style>
