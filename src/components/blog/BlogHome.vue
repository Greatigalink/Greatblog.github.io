<template>
	 <div id="home-auto">
      <div id="home-head">
        <blog-head></blog-head>
      </div>
      <div id="home-body-rdblog">
        <Recd-blog></Recd-blog>
      </div>
      <div id="home-more-blog" @click="turnOnArt">
        <div class="home-more-blog-back">
          <section class="he-more-button">
            <aside>
              更多文章
              <i class="el-icon-plus" style="margin-left: 30px;"></i>
            </aside>
          </section>
        </div>
      </div>
      <div id="home-body-onroad">
        <!-- <Recd-life></Recd-life> -->
      </div>
	 </div>
</template>
<script>

  import Header from '../function/Home/Header.vue'
  import Recdblog from './blogbody/Home/recommendblog.vue'

	export default {
		name: 'BlogHome',
		components: {
      'blog-head': Header,
      'Recd-blog': Recdblog
		},
    data:function() {
      return {
        autest:''
      }
    },
    mounted() {
    },
    methods:{
      turnOnArt() {
        this.$router.push({
          path: '/blogart',
          name: 'blogart',
        });
      }
    }
	}
</script>

<style>
  #home-auto {
    margin: 0px;
  }
  #home-head {
    width: 100%;
    height: 470px;
  }
  #home-body-rdblog {
    min-height: 500px;
    padding-top: 20px;
    padding-bottom: 10px;
    background-image: linear-gradient(left, #e9defa, #fbfcdb);
  }
  #home-more-blog {
    height: 170px;
  }
  .home-more-blog-back {
    height: 170px;
    padding-top: 10px;
  }
  #home-body-onroad {
    background-color: white;
  }
  .he-more-button {
    margin: 30px 45% 0px 37%;
    border: 1px white solid;
    height: 60px;
    text-align: center;
    cursor: pointer;
    transition: background-color 2s,margin-right 0.6s;
    padding-top: 20px;
    font-size: 27px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
  }
  .he-more-button:hover {
    background-color: #212121;
    margin-right: 37%;
  }
  .home-video {
    margin: 20px 0% 10px 5%;
    width: 30%;
    height: 15%;
  }
  @media screen and (max-width: 950px) {
    .he-more-button {
      margin: 30px 20% 0px 20%;
      font-size: 17px;
      height: 45px;
    }
    #home-head {
      height: 375px;
    }
    #home-body-rdblog {
      background: rgba(251,252,219,1);
    }
    .home-video {
      width: 90%;
      height: 45%;
    }
  }
</style>
