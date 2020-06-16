<template>
  <div id="article-auto">

    <div class="article-side-left">
      <aside class="side-left-con">
        <h1>文章</h1>
        <p>记录点滴，人生才能像一本书，充满活力</p>
      </aside>
    </div>

    <div class="article-body">
      <div v-if="classDisplay" class="article-side-classify">
        <classify-art></classify-art>
      </div>
      <div v-else class="article-side-classify-mobile">
        <el-popover
          placement="right"
          width="400"
          trigger="click"
        >
          <div style="margin-left: 15%;" :data="classDisplay">
            <h4 style="text-align: center;">点击时请点击文字或文字后</h4>
            <classify-art></classify-art>
          </div>
          <i class="el-icon-zoom-in" slot="reference" style="font-size: 13px;">分类</i>
        </el-popover>
      </div>
      <section class="article-content">
        <aside class="article-con-head">当前分类{{nowClassify}}</aside>
        <all-art v-for="artpost in artposts"
          :key="artpost.id"
          :artpost="artpost"
        >
        </all-art>
        <section style="text-align: center;">
          <el-pagination
             background
            :page-size="5"
            layout="prev, pager, next"
            :total="classCount"
            @current-change="getNowPage"
          >
          </el-pagination>
        </section>
      </section>
    </div>

  </div>
</template>

<script>
  import articlelist from '../function/Art/articlelist.vue'
  import classify from '../function/Art/classify.vue'
  import {Pagination,Popover} from 'element-ui'

  export default {
    name:'BlogArt',
    components: {
      'all-art': articlelist,
      'classify-art': classify,
      ElPagination: Pagination,
      ElPopover: Popover
    },
    data:function() {
      return {
        artposts:[
        ],
        classDisplay: this.$store.state.docWidth > 930 ? true : false,
        classId: 0,
        classCount: 0,
        preCount: 0,
        nextCount: 0,
        nowClassify: ' > 全部'
      }
    },
    watch: {
      getNowClassify:function(newNow, oldNow) { //更新当前分类的变化，以产生对应分类的分页信息
        this.nowClassify = newNow;
        this.classId = this.$store.state.nowClassify.id;
        this.classCount = this.$store.state.nowClassify.count;
        this.getArtlist(this.classCount,1);
        window.scrollTo(0,500);//更换分类时回到顶部
      },
      getAllArt:function(newA, oldA) { //监视文章总数的变化，以产生新的分页信息
        this.classCount = newA;
      },
      listenerWidth:function(newW, oldW) {
        this.classDisplay = newW > 930 ? true : false;
      }
    },
    mounted() {
      this.getArtlist(0,1);
    },
    destroyed() {
      this.$store.commit('setterNowAllArt', {account: 0});
    },
    methods: {
      getNowPage(val) { //点击页数时向服务端请求相应数据
        this.getArtlist(this.classCount,val);
        window.scrollTo(0,500);//重定向至顶部
      },
      getArtlist(count, nowPage) { //根据所提供的页数及分类总数计算对应页面文章的编号范围
        var prex = count - 5 * nowPage;
        var pre = prex < 0 ? 0 : prex;
        var next = count - 5 * (nowPage - 1);
        this.axios.post('/art/artlist', {pre: pre, next: next, classId: this.classId}).then((response)=>{
          if(response.data === 'error')alert('数据好像找不到了，刷新一下...');
          else {
            this.artposts = response.data;
          }
        }).catch(err=>{
          alert('连接失败...')
        });
      }
    },
    computed: {
      getAllArt() {
        return this.$store.state.nowAllArt;
      },
      getNowClassify() {
        return this.$store.state.nowClassify.label;
      },
      listenerWidth() {
        return this.$store.state.docWidth;
      }
    }
  }
</script>

<style>
  #article-auto {
  }
  .article-body {
    display: flex;
    background-color: white;
    padding: 1px 0px 1px 0px;
    border-bottom: 17px #ffe082 solid;
    min-height: 700px;
  }
  .article-con-head {
    margin: 10px;
    text-align: right;
    color: #00bcd4;
    font-size: 13px;
  }
  .article-content {
    flex: 1.7;
    margin:0px 15% 20px 2%;
  }
  .article-side-left {
    width: 100%;
    height: 470px;
  }
  .side-left-con {
    font-weight: bold;
    padding-top: 140px;
    text-align: center;
    font-size: 17px;
    width: 100%;
    color: white;
    letter-spacing: 2px;
  }
  .article-side-classify {
    flex: 0.4;
    padding-top: 30px;
    height: 500px;
  }
  @media screen and (max-width: 930px) {
    .article-side-left {
      height: 375px;
    }
    .article-side-classify-mobile {
      position: fixed;
      top: 350px;
      left: 2%;
      cursor: pointer;
      background-color: black;
      color: white;
      padding: 5px;
      border-radius: 5px;
    }
    .article-body {
      background-image: linear-gradient(left, #e0f2f1, #e0f2f1);
    }
    .article-content {
      margin: 20px 2.5% 0px 0%;
    }
  }
</style>
