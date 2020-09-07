<template>
  <ul id="home-hot-art">
    <header>
      <i class="el-icon-s-order"> 热门文章</i>
      <i @click="JumpArt()" class="el-icon-circle-plus"> 更多...</i>
    </header>
    <li
      v-for="post in hotArts"
      :key="post.id"
      :post="post"
      v-on:click="getArtContent(post.ArtSrc)"
    >
      <section></section>
      <img 
        :src="post.ImgSrc == 'none' ? icosrc : post.ImgSrc" 
        alt="热门文章"
      >
      <article>
        <strong>{{post.Title}}</strong>
      </article>
      <footer>
        <i class="el-icon-user-solid"></i><strong> {{post.Author}}</strong>
        <i class="el-icon-price-tag"></i><strong> {{post.Classify}}</strong>
      </footer>
    </li>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:'hotart',
    data() {
      return {
        hotArts: [],
        hotArtDoc: '',
        isloadArt: false,
        icosrc: 'http://101.37.83.157:3000/art/default.jpg'
      }
    },
    computed: {
      ...mapState({
        scrollTop: state => state.docScrollTop
      })
    },
    watch: {
      scrollTop:function(n,o) {
        var isPlay = this.hotArtDoc.offsetTop - n;
        if(isPlay < (window.innerHeight - 150) && !this.isloadArt) this.getHotArt();
      }
    },
    mounted() {
      this.hotArtDoc = document.getElementById('home-hot-art');
      if(this.hotArtDoc.offsetTop - this.scrollTop < (window.innerHeight - 150)) this.getHotArt();
    },
    methods: {
      JumpArt() {
        this.$router.push({
          name: 'blogart',
          path: '/blogart'
        })
      },
      getHotArt() {
        this.axios.post('/home/hotart').then(res => {
          if(!res.data) alert('Error')
          else {
            this.hotArts = res.data;
            this.isloadArt = true;
          } 
        }).catch(err => {
          console.log(err);
        })
      },
      getArtContent(id) {
        this.$router.push({
          path: '/detialsart',
          name: 'detialsart',
          query: {
            artId: id
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  #home-hot-art {
    margin: 0;
    padding: 10px 30px 30px 30px;
    list-style: none;
    background-color: white;
    min-height: 300px;
    header {
      margin: 20px 20px 20px 5%;
      font-size: 18px;
      color: #5d4037;
      i:nth-child(2) {
        font-size: 17px;
        cursor: pointer;
        color: #e57373;
      }
    }
    li {
      margin-top: 20px;
      position: relative;
      height: 140px;
      text-align: center;
      cursor: pointer;
      animation: hotArt 1s;
      img {
        width: 100%;
        height: 140px;
      }
      article {
        position: absolute;
        top: 40%;
        width: 100%;
        color: white;
        font-size: 14px;
      }
      footer {
        opacity: 0;
        position: absolute;
        bottom: 5%;
        width: 100%;
        color: white;
        font-size: 12px;
        transition: all 0.7s;
        i {
          color: #26c6da;
        }
        strong {
          margin-right: 10px;
        }
      }
      section {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($color: #212121, $alpha: 0.3);
      }
    }
    li:hover {
      footer {
        opacity: 1;
      }
    }
  }
  @keyframes hotArt {
    from {
      transform: scaleX(-1);
      opacity: 0;
    }
    to {
      transform: scaleX(1);
      opacity: 1;
    }
  }
</style>
