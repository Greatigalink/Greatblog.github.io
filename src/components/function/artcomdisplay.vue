<template>
  <div id="detials-display">
    <h2>{{nowType}}</h2>
    <section v-if="comTrue" class="des-display-List">
      <ul>
        <li v-for="post in commentlist"
          :key="post._id"
          :post="post"
          class="des-dis-list-con"
        >
          <div class="des-dis-list-conmain">
            <section>
              <el-avatar
                :size="50"
                :src="avatorSrc(post.AvatarSrc)"
              >
              </el-avatar>
            </section>
            <section>
              <aside class="des-name">{{post.Name}}</aside>
              <aside class="des-content">{{post.Content}}</aside>
              <section class="des-mark">
                <aside><i class="el-icon-pie-chart"></i>&nbsp;{{post.Time}}</aside>
                <aside @click="replay(post,true)"><i class="el-icon-chat-dot-square"></i></aside>
                <aside @click="exRy(post._id)">回复<i class="el-icon-d-caret">{{post.Replay.length}}</i></aside>
              </section>
            </section>
          </div>
          <div
            v-if="expandRy == post._id"
            v-for="rply in post.Replay"
            :key="rply._id"
            :rply="rply"
            class="des-dis-list-replay"
          >
            <section>
              <el-avatar :size="33" :src="avatorSrc(rply.AvatarSrc)"></el-avatar>
              <aside> <span>{{rply.RyName}}</span></aside>
              <section>回复</section>
              <aside> <span>{{rply.RyedName}}</span></aside>
            </section>
            <section>{{rply.Content}}</section>
            <section>
              <aside><i class="el-icon-pie-chart"></i>&nbsp;{{rply.Time}}</aside>
              <aside @click="replay(post,false,rply)"><i class="el-icon-chat-dot-square"></i></aside>
            </section>
          </div>
        </li>
      </ul>
    </section>
    <section v-else style="margin: 50px;">
      <h3 style="text-align: center;color: #795548;">{{msg}}</h3>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'detials-display',
    props: ['nowType','list'],
    data:function() {
      return {
        comTrue: this.list == false ? false : true,
        msg: '还没有评论，快来抢沙发吧!',
        avatorsrc: '',
        commentlist: this.list,
        expandRy: '',
        expandRyPre: ''
      }
    },
    watch: {
      list:function(n,o) {
        this.commentlist = n;
        this.comTrue = n.length == 0 ? false : true;
      }
    },
    methods: {
      avatorSrc(s) {
        var src = require('../../assets/avator/' + (parseInt(Math.random()*8)+1) + '.png');
        if(s == undefined || s == '' || s.length == 0 || s == 'none') return src;
        else return s;
      },
      exRy(s) {
        if(s == this.expandRyPre) {
          this.expandRy = '';
          this.expandRyPre = '';
        }
        else {
          this.expandRy = s;
          this.expandRyPre = s;
        }
      },
      replay(f,main,r) {
        if(!main) {
          r._id = f._id;
          f = r;
        }
        this.$emit('getterRy',f,main);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #detials-display {
    margin-top: 30px;
    background-color: white;
    min-height: 100px;
    padding: 1px;
    h2 {
      text-align: center;
      color: #795548;
    }
  }
  .des-display-List {
    margin: 10px;
    padding: 1px;
    ul {
      margin: 0px;
      padding: 0px;
    }
    .el-avatar {
      background-color: white;
    }
  }
  .des-dis-list-con {
    margin: 30px 10px 0px 10px;
    list-style: none;
    border-bottom: 1px #757575 solid;
    padding: 5px;
    white-space: pre-wrap;
  }
  .des-dis-list-conmain {
    display: flex;
    section:nth-child(2) {
      margin-left: 10px;
      flex: 5;
      padding: 10px;
      font-weight: bold;
      .des-name {
        color: #00bcd4;
        font-size: 17px;
      }
      .des-content {
        color: #795548;
        letter-spacing: 1px;
        line-height: 23px;
        font-size: 14px;
        min-height: 20px;
      }
    }
  }
  .des-mark {
    font-size: 13px;
    color: #757575;
    display: flex;
    aside:nth-child(1) {
      padding-top: 3px;
    }
    aside:nth-child(2) {
      color: #00bcd4;
      margin-left: auto;
      margin-right: 8px;
      font-size: 18px;
      cursor: pointer;
    }
    aside:nth-child(3) {
      padding-top: 3px;
      font-size: 12px;
      cursor: pointer;
    }
  }
  .des-dis-list-replay {
    margin:0px 0px 0px 9%;
    display: flex;
    flex-direction: column;
    section:nth-child(1) {
      padding-top: 5px;
      display: flex;
      font-size: 11px;
      border-top: 1px #BDBDBD solid;
      section { margin-top: 9px;}
      aside {
        margin:0px 5px 0px 5px;
        padding-top: 9px;
        text-align: center;
        color: #00bcd4;
      }
    }
    section:nth-child(2) {
      font-size: 11px;
      color: #795548;
      min-height: 20px;
      margin: 5px 0px 5px 4%;
    }
    section:nth-child(3) {
      display: flex;
      aside:nth-child(1) {
        padding-top: 4px;
        font-size: 11px;
        margin-left: 4%;
      }
      aside:nth-child(2) {
        margin-left: auto;
        color: #00bcd4;
        cursor: pointer;
        font-size: 17px;
      }
    }
  }
  @media screen and (max-width: 960px) {
    .des-dis-list-replay {
      padding: 5px;
      section:nth-child(2) {
        margin-left: 13%;
      }
      section:nth-child(3) {
        aside:nth-child(1) {
           margin-left: 10%;
        }
      }
    }
  }
</style>
