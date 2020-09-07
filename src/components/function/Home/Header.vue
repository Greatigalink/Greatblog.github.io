<template>
  <div 
    class="blackback"
    v-on:mousemove="loopPlay(false)"
    v-on:mouseout="loopPlay(true)"
  >
    <header 
      class="head-banner"
      v-on:click="clickHref()"
    >
      <article>
        <img src="http://101.37.83.157:3000/images/headback/homeBack2.jpg"/>
      </article>
      <article>
        <img src="http://101.37.83.157:3000/images/headback/homeBack1.jpg"/>
      </article>
      <section>
        <strong>欢迎来到 努力'向前的博客</strong>
        <p>浩瀚的宇宙，往往给予人们神秘的色彩，一望无际的尽头，是否还有人们期待的第二个地球呢?极美的星夜，天上没有一朵浮云，深蓝色的天上，满缀着钻石般的繁星。</p>
        <p>你是否与我一样，常常抬头仰望星空，却又感叹自己的渺小</p>
        <p>与我一起探索未知吧</p>
      </section>
    </header>
    <aside 
      title="left" 
      v-on:click="leftRight(-1)"
    >
      <i class="el-icon-arrow-left"></i>
    </aside>
    <aside 
      title="right" 
      v-on:click="leftRight(1)"
    >
      <i class="el-icon-arrow-right"></i>
    </aside>
    <footer>
      <ul>
        <li :style="{backgroundColor: getColor(1)}" v-on:click="clickPage(1)"></li>
        <li :style="{backgroundColor: getColor(2)}" v-on:click="clickPage(2)"></li>
        <li :style="{backgroundColor: getColor(3)}" v-on:click="clickPage(3)"></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name:'Header',
    data:function() {
    	return {
        headArts: [
          {id: 1, ImgSrc: 'http://101.37.83.157:3000/images/headback/homeBack1.jpg'},
          {id: 2, ImgSrc: 'http://101.37.83.157:3000/images/headback/homeBack2.jpg'},
          {id: 3, ImgSrc: 'http://101.37.83.157:3000/images/headback/homeBack3.jpg'}
        ],
        playImageNode: '',
        page: 1,
        lock: true,
        timer: ''
    	}
    },
    computed: {
    },
    mounted() {
      var banner = document.getElementsByClassName('head-banner')[0];
      banner.childNodes[0].style.opacity = 0;
      banner.childNodes[2].style.opacity = 1;
      this.playImageNode = banner;
      this.loopPlay(true);
    },
    methods:{
      getColor(s) {
        if(s == this.page) return '#ef5350';
        else return '';
      },
      leftRight(s) {
        var page = this.page + s;
        if(page == 0) page = 3;
        else if(page > 3) page = 1;
        if(this.lock) {
          this.page = page;
          this.switchImage(page);
        }
      },
      clickPage(s) {
        if(this.lock) {
          this.page = s;
          this.switchImage(s);
        } 
      },
      clickHref() {
        
      },
      switchImage(page) {
        var doc = this.playImageNode,
            i = 1,
            nextPage = this.headArts[page - 1].ImgSrc,
            that = this;
        doc.childNodes[0].firstChild.src = nextPage;
        this.lock = false;
        var timer = setInterval(function() {
          if(i > 100) {
            clearInterval(timer);
            doc.childNodes[2].firstChild.src = nextPage;
            doc.childNodes[0].style.opacity = 0;
            doc.childNodes[2].style.opacity = 1;
            that.lock = true;
          }
          else {
            doc.childNodes[0].style.opacity = (i/100);
            doc.childNodes[2].style.opacity = (1 - i/100);
            i++;
          }
        },11)
      },
      loopPlay(start) {
        var that = this;
        if(start) {
          this.timer = setInterval(function() {
            if(that.lock) that.leftRight(1);
          },3000)
        }
        else {
          if(this.timer) clearInterval(this.timer);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blackback {
    position: relative;
    width: 100%;
    height: 650px;
    margin-top: 60px;
    background: rgba($color: #212121, $alpha: 0.9);
    overflow: hidden;
    i {
      font-size: 80px;
    }
    aside {
      position: absolute;
      top: 200px;
      color: white;
      cursor: pointer;
    }
    aside[title="left"] {
      left: 30px;
    }
    aside[title="right"] {
      right: 30px;
    }
    aside:hover {
      color: #ef5350;
    }
    footer {
      position: absolute;
      bottom: 3%;
      width: 100%;
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;
        li {
          display: inline-block;
          width: 18px;
          height: 18px;
          margin: 10px;
          background-color: white;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
  .head-banner {
    position: relative;
    margin: 0;
    cursor: pointer;
    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 700px;
      }
    }
    section {
      position: absolute;
      top: 100px;
      left: 10%;
      width: 60%;
      color: white;
      strong {
        font-size: 40px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 950px) and (min-width: 450px) {
    .blackback {
      height: 370px;
      aside {
        top: 150px;
      }
    }
    .head-banner {
      margin: 0;
      article {
        img {
          height: 370px;
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    .blackback {
      height: 270px;
      i {
        font-size: 60px;
      }
      aside {
        top: 110px;
      }
    }
    .head-banner {
      margin: 0;
      article {
        img {
          height: 270px;
        }
      }
      section {
        top: 30px;
        left: 10%;
        width: 80%;
        strong {
          font-size: 20px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
</style>
