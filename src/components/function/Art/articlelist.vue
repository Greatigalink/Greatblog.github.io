<template>
  <li id="Article">
    <div id="Art-body">
      <div class="Art-con">
        <header class="con-title">
          {{artpost.Title}}
        </header>

        <article class="con-intro">
          {{artpost.Content}}
        </article>
      </div>
      <section class="end-more" @click="getArtContent()">
        <span>阅读更多</span>
        <i class="el-icon-caret-right"></i>
      </section>
      <aside class="end-mobile">
        <i class="el-icon-price-tag" style="flex: 1.3;">
          <span style="font-size: 12px;margin-left: 5px;">{{artpost.Classify}}</span>
        </i>
        <i class="el-icon-time" style="flex: 1.6;">
          <span>{{artpost.Time}}</span>
        </i>
        <i class="el-icon-view" style="flex: 1;">
          <span>{{artpost.View}}</span>
        </i>
      </aside>
    </div>
    <section  class="Art-img">
      <img v-if="Judgeimg" :src="artpost.ImgSrc" class="img-size"/>
      <img v-else src="../../../assets/logoko.png" class="iconsize"/>
    </section>
    <div id="Art-end">
       <section class="end-classify">
         <aside>
           <i class="el-icon-price-tag" style="margin-left: 5px;">
             <span>{{artpost.Classify}}</span>
           </i>
         </aside>
       </section>
       <section class="end-mark">
         <section>
           <i class="el-icon-user">
             <span >{{artpost.Author}}</span>
           </i>
           <i class="el-icon-time">
             <span>{{artpost.Time}}</span>
           </i>
           <i class="el-icon-view">
             <span>{{artpost.View}}</span>
           </i>
         </section>
       </section>
     </div>
  </li>
</template>

<script>
  export default {
    name:'articlelist',
    props:['artpost'],
    data:function() {
      return {
        Judgeimg: this.artpost.ImgSrc === 'none' ? false : true,
        ArtSrc: this.artpost.ArtSrc
      }
    },
    methods: {
      getArtContent:function() {
        var id = this.ArtSrc;
        this.$router.push({
          path: '/detialsart',
          name: 'detialsart',
          query: {
            artId: id,
            post: this.artpost
          }
        })
      }
    }
  }
</script>

<style>
  #Article {
    margin: 20px 0px 40px 10px;
    list-style: none;
    padding: 10px;
    display: flex;
  }
  #Art-body {
    flex: 1.2;
    margin: 10px;
  }
  .Art-img {
    margin-top: 10px;
    flex: 1.1;
  }
  .iconsize {
    margin: 50px 0% 0px 23%;
    width: 55%;
    height: 50%;
  }
  .img-size {
    width: 100%;
    height: 95%;
  }
  .Art-con {
    margin-top: 5px;
    width: 100%;
    padding: 5px;
    letter-spacing: 1px;
  }
  .con-title {
    width: 100%;
    font-size: 20px;
    color: #123C69;
    font-weight: bold;
  }
  .con-intro {
    margin-top: 15px;
    width: 95%;
    min-height: 130px;
    font-size: 13.5px;
    line-height: 24px;
    text-align: left;
    color: #6B6E70;
  }
  #Art-end {
    flex: 0.3;
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 1%;
    border-left: 1px #757575 solid;
    font-size: 12px;
  }
  #Art-end span {
    margin-left: 5px;
  }
  .end-classify {
    flex: 0.4;
    margin-top: 20px;
    padding-top: 4px;
    border: 1px 1px 1px 0px;
    color: #212121;
  }
  .end-mark {
    flex: 3;
  }
  .end-mark i {
    margin-top: 10px;
    padding: 5px;
    color:#212121;
  }
  #Art-body i {
    margin: 0px 3px 0px 3px;
  }
  #Art-body span {
    margin-left: 2px;
  }
  .end-more {
    border: 1px solid white;
    border-radius: 10px;
    margin: 0px 67% 0px 0%;
    height: 30px;
    text-align: left;
    padding: 5px 0px 0px 10px;
    font-size: 17px;
    color: #212121;
    font-weight: bold;
    cursor: pointer;
    transition: border-color 0.7s;
  }
  .end-more:hover {
    border-color: #c62828;
  }
  .end-mobile {
    display: none;
  }
  @media screen and (max-width: 980px) {
    #Article {
      flex-direction: column-reverse;
      background-color: white;
      border: 0px;
      padding: 0px;
    }
    #Art-end {
      font-size: 10px;
      display: none;
    }
    .con-intro {
      min-height: 90px;
    }
    .end-more {
      margin: 0px 50% 0px 0%;
    }
    .end-mobile {
      display: block;
      margin: 10px;
      font-size: 15px;
      color: #757575;
      display: flex;
    }
  }
</style>
