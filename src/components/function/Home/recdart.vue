<template>
   <li id="recd-art-li">
     <aside class="recd-art-img">
       <footer>
         <img :src="post.ImgSrc == 'none' ? icosrc : post.ImgSrc"  class="rd-art-imgsrc" @click="getArtContent()"/>
       </footer>
       <article>
         <header><b>{{post.Title}}</b></header>
         <footer>{{post.Content}}</footer>
         <nav @click="getArtContent()">ReadMore</nav>
         <section>
            <i class="el-icon-time">
              <span> {{post.Time}}</span>
            </i>
            <i class="el-icon-view">
              <span> {{post.View}}</span>
            </i>
          </section>
       </article>
     </aside>
   </li>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:'recdart',
    props:['post'],
    data:function() {
      return {
        icosrc: 'http://101.37.83.157:3000/art/default.jpg',
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
    methods: {
      getArtContent() {
        var id = this.post.ArtSrc;
        this.$router.push({
          path: '/detialsart',
          name: 'detialsart',
          query: {
            artId: id
          }
        })
      }
    },
    computed: {
      getDocWidth() {
        return this.$store.state.docWidth
      },
      ...mapState({
        widthDoc: state => state.docWidth
      })
    }
  }
</script>

<style lang="scss" scoped>
  #recd-art-li {
    margin-top: 20px;
    padding: 30px;
    list-style: none;
    letter-spacing: 2px;
    background-color: white;
  }
  .recd-art-img {
    display: flex;
    footer {
      flex: 2.5;
      overflow: hidden;
    }
    article {
      position: relative;
      flex: 4;
      header {
        color: #f57c00;
        padding: 0px 20px 5px 40px;
        font-size: 18px;
      }
      footer {
        padding: 8px 20px 10px 40px;
        color: #757575;
        font-size: 13px;
        min-height: 100px;
      }
      nav {
        position: absolute;
        left: 7%;
        bottom: 5px;
        padding: 9px;
        font-size: 13px;
        font-weight: bold;
        background-color: #ef5350;
        color: white;
        cursor: pointer;
      }
      section {
        position: absolute;
        right: 2%;
        bottom: 5px;
        font-weight: bold;
        i {
          font-size: 15px;
          color: #4fc3f7;
          margin-right: 20px;
          span {
            font-size: 12px;
            color: #757575;
          }
        }
      }
    }
  }
  .rd-art-imgsrc {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;
  }
  .rd-art-imgsrc:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 1300px) and (min-width: 450px) {
    #recd-art-li {
      background-color: white;
    }
  }
  @media screen and (max-width: 450px){
    #recd-art-li{
      padding-bottom: 5px;
    }
    .rd-art-imgsrc {
      height: 150px;
    }
    .recd-art-img {
      flex-direction: column;
      article {
        header {
          padding-left: 5px;
          font-size: 16px;
        }
        footer {
          display: none;
        }
        nav {
          position: static;
          width: 40%;
          text-align: center;
          margin-top: 10px;
        }
        section {
          position: static;
          margin-top: 7px;
        }
      }
    }
  }
</style>
