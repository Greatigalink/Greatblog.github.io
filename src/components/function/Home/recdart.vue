<template>
   <li id="recd-art-li" @click="getArtContent()">
     <aside v-if="!IcoImg" class="recd-art-img">
       <img :src="icosrc" class="rd-art-icosrc" />
     </aside>
     <section class="recd-art-content">
       <article class="recd-art-p">
         <aside class="recd-art-title">{{post.Title}}</aside>
         <aside class="recd-art-con">{{post.Content}}</aside>
         <hr style="border: 0px;border-bottom: 1px #bdbdbd solid;" v-if="mobile"/>
         <section v-if="mobile" class="recd-mobile-mark">
           <i class="el-icon-time" style="flex: 1.6;">
             <span> {{post.Time}}</span>
           </i>
           <i class="el-icon-view" style="flex: 1;">
             <span> {{post.View}}</span>
           </i>
         </section>
         <section v-else class="art-mark-readmore">
           <section  class="art-readmore">
             阅读
             <i class="el-icon-caret-right" style="font-size: 18px;margin-left: 30px;"></i>
           </section>
         </section>
       </article>
     </section>
     <aside v-if="IcoImg" class="recd-art-img">
       <img :src="post.ImgSrc"  class="rd-art-imgsrc"/>
     </aside>
   </li>
</template>

<script>
  export default {
    name:'recdart',
    props:['post'],
    data:function() {
      return {
        IcoImg:this.post.ImgSrc === 'none' ? false : true,
        icosrc: '',
        mobile: this.$store.state.docWidth < 930 ? true : false,
        artcontent: '',
        artconlocation: '',
        artimglocation: ''
      }
    },
    watch: {
      getDocWidth:function(newMo, oldMo) {
        this.mobile = newMo < 930 ? true : false
      }
    },
    mounted() {
      if(this.IcoImg === false) {
        this.icosrc = require('../../../assets/logoko.png');
      }
    },
    methods: {
      getArtContent() {
        var id = this.post.ArtSrc;
        this.$router.push({
          path: '/detialsart',
          name: 'detialsart',
          query: {
            artId: id,
            post: this.post
          }
        })
      }
    },
    computed: {
      getDocWidth() {
        return this.$store.state.docWidth
      }
    }
  }
</script>

<style>
  #recd-art-li {
    margin: 20px 0px 30px 0px;
    list-style: none;
    padding: 1px;
    display: flex;
    cursor: pointer;
    border-bottom: 2px #e0e0e0 solid;
  }
  .recd-art-content {
    flex: 1;
    margin: 10px;
    padding: 1px;
    font-weight: bold;
  }
  .recd-art-img {
    flex: 1;
    margin: 10px;
    cursor: pointer;
   
  }
  .rd-art-imgsrc {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
  }
  .rd-art-imgsrc:hover {
    opacity: 0.8;
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
  .rd-art-icosrc {
    margin: 50px 0% 0px 20%;
    width: 50%;
    height: 50%;
  }
  .recd-art-title {
    font-size: 23px;
    margin: 10px;
    padding: 3px;
    color: #00acc1;
  }
  .recd-art-con {
    margin: 20px 0px 5px 0px;
    padding: 5px;
    min-height: 130px;
    font-size: 14px;
    letter-spacing: 3px;
    line-height: 25px;
    color: #3e2723;
  }
  .art-mark-readmore {
    margin: 10px 63% 0px 0%;
    border:1px solid white;
    height: 40px;
    padding-top: 7px;
    border-radius: 10px;
    transition: all 0.7s;
  }
  .art-mark-readmore:hover {
    transform: scale(1.05);
    border-color: #c62828;
  }
  .art-readmore {
    margin-left: 7%;
    font-size: 21px;
    text-align: left;
    color: #212121;
  }
  @media screen and (max-width: 950px) {
    #recd-art-li {
      display: flex;
      flex-direction: column-reverse;
      background-color: white;
      box-shadow: 3px 3px 10px #757575;
    }
    .recd-art-img {
      margin: 0px;
    }
    .recd-art-con {
      min-height: 70px;
    }
    .recd-art-title {
      font-size: 19px;
    }
    .recd-mobile-mark {
      display: flex;
      margin: 10px 15% 3px 5%;
    }
    .recd-mobile-mark {
      font-size: 14px;
    }
    .recd-mobile-mark i {
      font-weight: bold;
      color: #3e2723;
    }
    .recd-mobile-mark span {
      color: #757575;
    }
  }
</style>
