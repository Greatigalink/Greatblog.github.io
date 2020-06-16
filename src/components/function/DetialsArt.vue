<template>
  <div id="detials-auto">
    <header class="detials-auto-header">
      <section style="margin-top: 150px;">
        <h1>欢迎指出文章错误</h1>
      </section>
    </header>
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
    },
    mounted() {
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

<style>
  #detials-auto {
    padding-top: 10px;
    min-height: 700px;
  }
  .detials-auto-header {
    height: 470px;
    text-align: center;
    padding-top: 1px;
    color: white;
  }
  .detials-auto-Con {
     background-color: #ECECEC;
     padding: 10px 8% 20px 8%;
  }
  @media screen and (max-width: 950px) {
    .detials-auto-header {
      height: 390px;
    }
    .detials-auto-Con {
      padding: 10px 1% 20px 1%;
    }
  }
</style>
