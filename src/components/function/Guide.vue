<template>
  <div id="blog-guide">
    <section id="author-name">
      <aside class="blog-guide-author">Greatiga</aside>
    </section>
    <section style="flex: 2;">
      <aside v-if="pcormob" class="pc-guide">
        <guide-list :leave="pcormob"></guide-list>
      </aside>
      <aside v-else class="mob-guide">
        <aside class="guide-mobile"
          @click="mob = true"
        >
          <i class="el-icon-menu"></i>
        </aside>
        <el-drawer
          :visible.sync="mob"
          :with-header="false"
          :modal-append-to-body="false"
          size="80%"
        >
          <aside class="mob-guide-guideAr">
            <div title="guide2">
              <guide-list @closemob="closemob" :leave="pcormob"></guide-list>
            </div> 
            <div title="author1">
              <Author></Author>
            </div>
          </aside>
          <aside class="mob-guide-close" @click="mob = false"><i class="el-icon-close"></i></aside>
        </el-drawer>
      </aside>
    </section>
    <section class="guide-say">
      <div class="say-button" @click="goLeave">
        <aside class="say"> <i class="el-icon-s-promotion"></i></aside>
        <aside class="say-p">留 言</aside>
      </div>
    </section>
  </div>
</template>

<script>
  import Guidelist from './Guidelist.vue'
  import {Drawer} from 'element-ui'
  import Author from '../function/Home/author'
  export default {
    name:'Guide',
    components: {
      'guide-list': Guidelist,
      'Author': Author,
      ElDrawer: Drawer
    },
    data:function() {
      return {
        pcormob: true,
        mob: false
      }
    },
    mounted() {
      this.pcormob = document.documentElement.clientWidth > 930 ? true : false;
    },
    computed: {
      getDocWidth(){
        return this.$store.state.docWidth;
      }
    },
    watch: {
      getDocWidth:function(newS,oldS) {
        if(newS <= 930)this.pcormob = false
        else this.pcormob = true
      }
    },
    methods: {
      closemob() {
        this.mob = false;
      },
      goLeave() {
        if(this.$route.path !== '/blogabout') {
          this.$router.push({
            path: '/blogabout',
            name: 'blogabout',
            params: {
              turnOnLy: true
            }
          })
        }
        else {
          this.$store.commit('setterReLocal', {relocal: true});
        }
      }
    },
    destroyed() {
      this.$store.commit('setterReLocal', {relocal: false});
    }
  }
</script>

<style>
  #blog-guide {
    width: 100%;
    height: 100%;
    display: flex;
    border-bottom: 1px #ececec solid;
    background-color: white;
  }
  #author-name {
    flex: 0.7;
    font-size: 30px;
    cursor: pointer;
    text-align: center;
  }
  .mob-guide-guideAr {
    display: flex;
    border:1px white solid;
  }
  .mob-guide-guideAr div[title="author1"] {
    flex: 1;
  }
  .mob-guide-guideAr div[title="guide2"] {
    flex: 0.5;
  }
  .blog-guide-author {
    margin-top: 8px;
  }
  .pc-guide {
    height: 100%;
    /* border: 1px red solid; */
  }
  .guide-say {
    flex: 1.7;
  }
  .say-button {
    margin: 7px 10% 0px 69%;
    background-color: #00bcd4;
    border: 0px;
    border-radius: 15px;
    cursor: pointer;
    padding: 10px;
    color: white;
    display: flex;
    font-weight: bold;
  }
  .say {
    padding-left: 10px;
    flex: 1;
    font-size: 20px;
  }
  .say-p {
    padding-top: 2px;
    flex: 1.5;
  }
  @media screen and (max-width: 950px) {
    .guide-say {
      display: none;
    }
    .mob-guide {
      display: block;
    }
    .blog-guide-author {
      margin-top: 5px;
    }
    .guide-mobile {
      float: right;
      margin:1px 5% 0px 0px;
      color: #212121;
      font-size: 40px;
      cursor: pointer;
    }
    .mob-guide-close {
      margin-top: 10px;
      text-align: center;
      font-size: 30px;
      cursor: pointer;
    }
  }
</style>
