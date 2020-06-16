<template>
  <div class="detials-Content">
    <div v-if="Artwait" v-loading="true" class="detials-Lodding"></div>
    <section v-else v-html="ArtCon" v-highlight class="detials-content-con"></section>
    <h1>-The End-</h1>
    <section v-if="!Artwait" class="detials-content-msg">
      <section v-for="post in ArtMsg" :post="post" style="display: flex;">
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
        View: 0
      }
    },
    mounted() {
      this.ArtSrc = this.$route.query.artId;
      var msg = this.$route.query.post;
      this.View = msg === undefined ? 0 : msg.View;
      this.getArtContent();
      if(msg === undefined || typeof msg === 'string')this.getArtMsg();
      else {
        this.ArtMsg[0] = msg;
      }
    },
    methods: {
      getArtContent:function() {
        this.axios.post('/art/detialsart',{artsrc: this.ArtSrc, view: this.View}).then((response)=>{
          if(!response.data) {
            this.$store.commit('setterIsArt',{isArt: false});
            this.ArtCon = '找不到这篇文章';
          }
          else {
            this.ArtCon = response.data;
          }
          this.Artwait = false;
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
    margin: 10px 0px 10px 0px;
    min-height: 700px;
    padding: 10px;
    background-color: white;
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
  .detials-Content blockquote p {
      margin: 0px;
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
  @media screen and (max-width: 950px) {
    .detials-content-msg {
      width: 100%;
      font-size: 11px;
    }
    .detials-content-con {
      margin: 0px 1% 0px 1%;
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
  }
</style>
