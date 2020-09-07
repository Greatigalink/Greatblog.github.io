<template>
  <div id="recd-article">
    <header title="Hot">
      <h3>每月一问，时常反思</h3>
      <div>
        <img :src="headArt.ImgSrc" alt="前端入门">
      </div>
      <article>
        <h1>{{headArt.Title}}</h1>
        <section>{{headArt.Content}}</section>
      </article>
      <footer>
        <nav v-on:click="getArtContent(headArt.ArtSrc)">阅读更多</nav>
        <section>
          <i class="el-icon-user-solid">
            <span> {{headArt.Author}}</span>
          </i>
          <i class="el-icon-date">
            <span> {{headArt.Time}}</span>
          </i>
        </section>
      </footer>
    </header>
    <ul class="redc-art-location">
      <h3>最近文章</h3>
      <recd-art v-for="post in artposts"
        :key="post.id"
        :post="post"
      >
      </recd-art>
    </ul>
  </div>
</template>

<script>
  import recdart from '../../../function/Home/recdart.vue'

  export default {
    name:'recdart',
    components:{
      'recd-art': recdart
    },
    data:function(){
      return {
        headArt: {},
        artposts:[]
      }
    },
    mounted() {
      this.getHotRoad();
      this.getRecdArt();
    },
    methods: {
      getHotRoad() {
        this.axios.post('/home/hotroad').then(res => {
          if(!res.data) alert('未查询到每月一问');
          else this.headArt = res.data[0];
        }).catch(err => {
          alert(err);
        })
      },
      getRecdArt() {
        this.axios.post('/home/recdpost').then((response)=>{
        if(response.data === 'error')console.log('查询失败');
        else {
          this.artposts = response.data;
        }
        }).catch(err=>{
          alert('Error')
        });
      },
      getArtContent:function(id) {
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

<style lang="scss" soped>
  #recd-article {
    flex: 3;
    margin: 20px 0 20px 20px;
    padding: 1px;
  }
  header[title="Hot"] {
    min-height: 300px;
    margin: 0 50px 0 50px;
    padding: 10px 30px 30px 30px;
    background-color: white;
    letter-spacing: 1.5px;
    h3 {
      color: #26c6da;
    }
    article {
      h1 {
        font-size: 18px;
      }
      section {
        font-size: 13px;
        color: #757575;
      }
      margin-bottom: 10px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    footer {
      position: relative;
      height: 60px;
      nav {
        position: absolute;
        bottom: 0;
        padding: 10px;
        color: white;
        background-color: #26c6da;
        cursor: pointer;
      }
      section {
        position: absolute;
        bottom: 0;
        right: 5%;
        font-size: 13px;
        i {
          margin-right: 6px;
          color: #26c6da;
          span {
            color: #212121;
          }
        }
      }
    }
  }
  .redc-art-location {
    margin: 0 50px 0 50px;
    padding: 0;
    h3 {
      color: #ef5350;
      margin-left: 5%;
    }
  }
  @media screen and (max-width: 950px) and (min-width: 450px) {
    .redc-art-location {
      margin: 20px 0% 20px 0%;
      padding: 0px;
    }
    #recd-article {
      margin: 0% 1% 10px 1%;
      padding: 1px;
      header[title="Hot"] {
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 450px){
    #recd-article {
      margin: 0px 0% 20px 0%;
      padding: 1px;
      header[title="Hot"] {
        margin: 0;
        footer {
          section {
            position: static;
            right: 0;
            font-size: 11px;
          }
        }
      }
    }
    .redc-art-location {
      margin: 0px;
      padding: 0px;
    }
  }
</style>
