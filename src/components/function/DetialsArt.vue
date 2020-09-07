<template>
  <div id="detials-auto">
    <!-- <header class="detials-auto-header">
      <section>
        <span>{{nowClassify}}</span>
      </section>
    </header> -->
    <div class="detials-auto-Con">
      <des-con></des-con>
      <div v-if="isArt">
        <des-comment></des-comment>
        <des-display v-if="listLodding" :nowType="'评论列表'" :list="commentlist" @getterRy="getterRy(arguments)"></des-display>
        <p v-else>无法加载评论,请刷新</p>
      </div>
    </div>
    <replay v-if="replay" :openRy="true" @closeRy="closeRy" :ryMsg="ryMsg"></replay>
  </div>
</template>

<script>
  import detialscon from './Art/detialscon.vue'
  import artcomment from './Art/artcomment.vue'
  import artdisplay from './artcomdisplay.vue'
  import Replay from './Replay.vue'

  export default {
    name: 'DetialsArt',
    components: {
      'des-con': detialscon,
      'des-comment': artcomment,
      'des-display': artdisplay,
      'replay': Replay
    },
    data:function() {
      return {
        Artwait: true,
        isArt: this.$store.state.isArt,
        nowClassify: '全部',
        listLodding: false,
        replay: false,
        ryMsg: {},
        commentlist: []
      }
    },
    watch: {
      getIsArt:function(n,o) {
        if(n) this.isArt = true;
        else this.isArt = false;
      },
      getSubTF:function(newSub, oldSub) {
        if(newSub) {
          this.getCommentList();
          this.$store.commit('setterSubArtCom', {subTF: false});
        }
      },
      '$route': function() {
        this.listLodding = false;
        this.getCommentList();
      }
    },
    mounted() {
      this.getClassify();
      this.getCommentList();
    },
    computed: {
      getIsArt() {
        return this.$store.state.isArt;
      },
      getSubTF() {
        return this.$store.state.subArtComment;
      }
    },
    methods: {
      getClassify() {
        var id = this.$route.query.artId;
        if(id == null || id.length < 5 || id == undefined) id = 0;
        switch(id[0]) {
          case '1': this.nowClassify = 'web前端';break;
          case '2': this.nowClassify = '网站后台';break;
          case '3': this.nowClassify = '技术杂谈';break;
          case '4': this.nowClassify = '音乐影视';break;
          case '5': this.nowClassify = '生活情感';break;
        }
      },
      getCommentList() {
        var artid = this.$route.query.artId;
        this.axios.post('/art/artdisplay',{id: artid}).then((response)=>{
          this.commentlist = response.data;
          this.listLodding = true;
        }).catch(err=>{
          this.msg = '数据错误了，请刷新';
        });
      },
      getterRy(array) {
        this.ryMsg = {
          msg: array[0],
          type: array[1],
          belone: 'art'
        }
        this.replay = true;
        // console.log(array)
      },
      closeRy() {
        this.replay = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #detials-auto {
    padding-top: 0px;
    min-height: 700px;
    background: url(http://101.37.83.157:3000/images/headback/homeBack2.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .detials-auto-Con {
     padding: 10px 8% 20px 8%;
  }
  @media screen and (max-width: 950px) and (min-width: 450px) {
    .detials-auto-Con {
      padding: 10px 2% 20px 2%;
    }
  }
  @media screen and (max-width: 450px) {
    .detials-auto-Con {
      padding: 10px 0% 20px 0%;
    }
  }
</style>
