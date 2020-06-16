<template>
  <div id="detials-display">
    <h2 style="text-align: center;color: #795548;">{{nowType.art === 'art' ? '评论列表' : '留言列表'}}</h2>
    <section v-if="comTrue" class="des-display-List">
      <ul style="margin: 0px;padding: 0px;">
        <li v-for="post in commentlist"
          :key="post.id"
          :post="post"
          class="des-dis-list-con"
        >
          <div class="des-dis-list-conmain">
            <section>
              <el-avatar
                class="des-dis-list-avator"
                style=""
                :size="50"
                :src="require('../../assets/avator/' + (parseInt(Math.random()*8)+1) + '.png')"></el-avatar>
            </section>
            <section class="des-dis-list-msg">
              <aside class="des-name">{{post.Name}}</aside>
              <aside class="des-content">{{post.Content}}</aside>
              <aside class="des-mark"><i class="el-icon-pie-chart"></i>&nbsp;{{post.Time}}</aside>
            </section>
          </div>
          <div>

          </div>
        </li>
      </ul>
    </section>
    <section v-else style="margin: 50px;">
      <h3 style="text-align: center;color: #795548;">{{this.msg}}</h3>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'detials-display',
    props: ['nowType'],
    data:function() {
      return {
        comTrue: false,
        msg: '还没有评论，快来抢沙发吧!',
        avatorsrc: '',
        commentlist: []
      }
    },
    watch: {
      getSubTF:function(newSub, oldSub) {
        if(newSub) {
          this.getCommentList();
          this.$store.commit('setterSubArtCom', {subTF: false});
        }
      },
      getSubLy:function(newLy, oldLy) {
        if(newLy) {
          this.getLeaveList();
          this.$store.commit('setterSubLeaveSay', {subly: false});
        }
      }
    },
    computed: {
      getSubTF() {
        return this.$store.state.subArtComment;
      },
      getSubLy() {
        return this.$store.state.subLeaveSay;
      }
    },
    mounted() {
      if(this.nowType.art === 'art') {
        this.getCommentList();
      }
      else {
        this.getLeaveList();
      }
    },
    methods: {
      getCommentList() {
        var artid = this.$route.query.artId;
        this.axios.post('/art/artdisplay',{id: artid}).then((response)=>{
          this.commentlist = response.data;
          this.comTrue = this.commentlist.length === 0 ? false : true;
        }).catch(err=>{
          this.msg = '数据错误了，请刷新';
        });
      },
      getLeaveList() {
        this.axios.post('/about/leavelist').then((response)=>{
          this.commentlist = response.data;
          this.comTrue = this.commentlist.length === 0 ? false : true;
        }).catch(err=>{
          this.msg = '数据错误了，请刷新';
        });
      }
    }
  }
</script>

<style>
  #detials-display {
    margin-top: 30px;
    background-color: white;
    min-height: 100px;
    padding: 1px;
  }
  .des-display-List {
    margin: 30px 10px 10px 10px;
    padding: 1px;
  }
  .des-dis-list-con {
    margin: 30px 10px 0px 10px;
    list-style: none;
    border-bottom: 1px #757575 solid;
    padding: 5px;
  }
  .des-dis-list-conmain {
    display: flex;
  }
  .des-dis-list-msg {
    margin-left: 10px;
    flex: 5;
    padding: 10px;
    font-weight: bold;
  }
  .des-dis-list-avator {
    background-color: #ECECEC;
  }
  .des-name {
    color: #00bcd4;
    font-size: 17px;
  }
  .des-content {
    margin-top: 10px;
    color: #795548;
    letter-spacing: 1px;
    line-height: 23px;
    font-size: 14px;
    min-height: 50px;
    white-space: pre-wrap;
  }
  .des-mark {
    margin-top: 10px;
    font-size: 13px;
    color: #757575;
  }
</style>
