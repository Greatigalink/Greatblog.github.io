<template>
  <div class="detials-Content">
    <div v-if="Artwait" v-loading="true" class="detials-Lodding"></div>
    <section v-else v-html="ArtCon" v-highlight class="detials-content-con"></section>
    <section v-if="ArtError" class="des-error">{{errorMsg}}</section>
    <h1>-The End-</h1>
    <section v-if="!Artwait" class="detials-content-msg">
      <section v-for="post in ArtMsg" :key="post.View" :post="post" style="display: flex;">
        <aside class="des-con-artmsg">
          <i class="el-icon-s-order"><span>&nbsp;分类 >&nbsp;</span></i>{{post.Classify}}
        </aside>
        <aside class="des-con-artmsg">
          <i class="el-icon-s-custom"><span>&nbsp;作者 >&nbsp;</span></i>{{post.Author}}
        </aside>
        <aside class="des-con-artmsg">
          <i class="el-icon-time"><span>&nbsp;发布时间 >&nbsp;</span></i>{{post.Time}}
        </aside>
        <aside class="des-con-artmsg">
          <i class="el-icon-view"><span>&nbsp;浏览量 >&nbsp;</span></i>{{post.View}}
        </aside>
      </section>
    </section>
    <footer class="des-pre-next">
      <aside v-if="pre.length > 0" @click="jumpArt(0)">
        <i class="el-icon-caret-left"></i>
        <b>上一篇</b>
        <span>{{pre.length > 17 ? pre.slice(0,17) : pre}}</span>
      </aside>
      <aside v-if="next.length > 0" @click="jumpArt(1)">
        <b>下一篇</b>
        <i class="el-icon-caret-right"></i>
        <span>{{next.length > 17 ? next.slice(0,17) : next}}</span>
      </aside>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'detialscon',
    data:function() {
      return {
        ArtCon: '',
        ArtSrc: '',
        ArtMsg: [],
        Artwait: true,
        ArtError: false,
        errorMsg: '',
        pre: '',
        next: '',
        View: 0
      }
    },
    watch: {
      '$route':function (n,o) {
        this.ArtSrc = this.$route.query.artId.toString();
        this.getArtMsg();
        this.getPreNext();
        this.getArtContent();
      }
    },
    mounted() {
      var ArtSrc = this.$route.query.artId;
      if(ArtSrc == null || ArtSrc.length < 5 || ArtSrc == undefined) {
        this.errorMsg = "文章请求格式不对\n正确格式例如 \"/detialsart?artId=17001\"\n编号不少于5位，请重试";
        this.ArtError = true;
        this.Artwait = false;
        this.$store.commit('setterIsArt',{isArt: false});
      }
      else {
        this.ArtSrc = ArtSrc;
        this.getArtMsg();
        this.getPreNext();
        this.getArtContent();
      } 
    },
    methods: {
      getArtContent:function() {
        this.axios.post('/art/detialsart',{artsrc: this.ArtSrc}).then((response)=>{
          if(!response.data) {
            this.$store.commit('setterIsArt',{isArt: false});
            this.errorMsg = "没找到这篇文章，可能已经被删除了";
            this.ArtError = true;
            this.$store.commit('setterIsArt',{isArt: false});
          }
          else {
            this.ArtCon = response.data;
          }
          this.Artwait = false;
          window.scrollTo(0,0);
        }).catch(err=>{
          console.log("NO md");
        });
      },
      getArtMsg:function() {
        this.axios.post('/art/artmsg',{id: this.ArtSrc}).then((response)=>{
          this.ArtMsg = response.data;
        }).catch(err=>{
          console.log("No Msg!");
        });
      },
      getPreNext() {
        var msg;
        this.axios.post('/art/preNextArt',{artId: this.ArtSrc}).then(res => {
          if(!res) this.pre = this.next = '';
          else {
            msg = res.data;
            if(msg.length == 1) {
              this.pre = msg[0].id < parseInt(this.ArtSrc) ? msg[0].Title : '';
              this.next = msg[0].id > parseInt(this.ArtSrc) ? msg[0].Title : '';
            }
            else if(msg.length > 1) {
              this.pre = msg[0].Title;
              this.next = msg[1].Title;
            }
          }
        }).catch(err => {
          alert(err);
        })
      },
      jumpArt(s) {
        var id = (s == 0) ? parseInt(this.ArtSrc) - 1 : parseInt(this.ArtSrc) + 1;
        this.$router.push({
          path: '/detialsart',
          name: 'detialsart',
          query: {
            artId: id
          }
        })
      }
    },
    destroyed() {
      this.$store.commit('setterIsArt',{isArt: true});
    }
  }
</script>

<style>
  .detials-Lodding {
    margin: 100px 47% 0px 47%;
  }
  .detials-Content {
    margin: 100px 0px 10px 0px;
    min-height: 700px;
    padding: 10px;
    background: rgba(255,255,255,0.9);
  }
  .des-error {
    color: #ef5350;
    text-align: center;
    font-size: 19px;
    padding-top: 50px;
    white-space: pre-wrap;
  }
  .detials-content-con {
    margin: 0px 10% 0px 10%;
  }
  .detials-Content h1 {
    text-align: center;
    color: #795548;
    line-height: 6.25rem;
    font-size: 26px;
    margin-bottom: 50px;
    letter-spacing: 2px;
  }
  .detials-Content h2 {
    color: #00acc1;
    font-size: 24px;
    padding: 10px;
    border-bottom: 1px #BDBDBD solid;
  }
  .detials-Content h3 {
    color: #ef6c00;
    font-size: 17px;
    padding: 10px;
    border-bottom: 1px #ECECEC solid;
  }
  .detials-Content h4 {
    letter-spacing: 1px;
    font-size: 15px;
    color: #757575;
  }
  .detials-Content code {
    line-height: 20px;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .detials-Content p {
    font-size: 14px;
    padding: 5px 0px 5px 10px;
    line-height: 23px;
    letter-spacing: 1px;
    color: #546e7a;
  }
  .detials-Content img{
    margin: 10px 8% 10px 8%;
    width: 80%;
  }
  .detials-Content blockquote{
    margin: 0px;
    border-left: 5px #ececec solid;
  }
  .detials-Content blockquote ol{
    margin-left: 30px;
  }
  .detials-Content ol {
    margin: 0px;
    padding: 0px;
    line-height: 30px;
    font-size: 14px;
    color: #757575;
  }
  .detials-content-msg {
    margin-top: 50px;
    width: 60%;
    font-size: 13px;
  }
  .des-con-artmsg {
    flex: 1;
    height: 33px;
    padding-top: 10px;
    text-align: center;
    color: #00695c;
  }
  .des-pre-next {
    margin-top: 40px;
    font-size: 14px;
    color: #ef5350;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1.5px;
  }
  .des-pre-next span {
    margin-left: 5px;
    font-size: 13px;
    color: #80deea;
  }
  .des-pre-next aside {
    margin: 10px 27% 10px 27%;
  }
  .des-pre-next aside:hover {
    background-color: #ef5350;
    color: white;
  }
  .des-pre-next aside:nth-child(1) {
    cursor: pointer;
    padding: 10px;
    border-radius: 15px;
    transition: all 0.5s;
  }
  .des-pre-next aside:nth-child(2) {
    cursor: pointer;
    padding: 10px;
    border-radius: 15px;
    transition: all 0.5s;
  }
  @media screen and (max-width: 950px) {
    .detials-content-msg {
      width: 100%;
      font-size: 11px;
    }
    .detials-content-con {
      margin: 0;
    }
    .des-con-artmsg span {
      display: none;
    }
    .detials-Content h1 {
      font-size: 16px;
    }
    .detials-Content h2 {
      font-size: 16px;
    }
    .detials-Content h3 {
      font-size: 15px;
    }
    .detials-Content h4 {
      font-size: 14px;
    }
    .detials-Content code {
      line-height: 15px;
      font-size: 15px;
    }
    .detials-Content img{
      margin: 10px 1% 10px 1%;
      width: 97%;
    }
    .des-pre-next aside {
      margin: 10px 2% 10px 2%;
    }
  }
</style>
