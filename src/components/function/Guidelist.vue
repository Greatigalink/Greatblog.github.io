<template>
  <section id="guide-name">

    <router-link to="/bloghome" class="guide-name-p">
      <aside :style="{color: guideId == 1 ? '#4dd0e1' : ''}">
        <i class="el-icon-s-home"></i><strong>首页</strong>
      </aside>
    </router-link>

    <router-link to="/blogart" class="guide-name-p">
      <aside :style="{color: guideId == 2 ? '#4dd0e1' : ''}">
        <i class="el-icon-s-order"></i><strong>文章分享</strong> 
      </aside>
    </router-link>

    <router-link to="/blogdiary" class="guide-name-p">
      <aside :style="{color: guideId == 4 ? '#4dd0e1' : ''}">
        <i class="el-icon-camera-solid"></i><strong>点滴记录</strong> 
      </aside>
    </router-link>

    <router-link to="/bloglink" class="guide-name-p">
      <aside :style="{color: guideId == 5 ? '#4dd0e1' : ''}">
        <i class="el-icon-paperclip"></i><strong>友链</strong>
      </aside>
    </router-link>

    <router-link to="/blogabout" class="guide-name-p">
      <aside :style="{color: guideId == 6 ? '#4dd0e1' : ''}">
        <i class="el-icon-s-custom"></i><strong>关于</strong>
      </aside>
    </router-link>

    <aside v-if="!this.leave" class="guide-name-p" @click="goLeave()">
      <i class="el-icon-s-promotion"><span style="color: #212121;">留言</span></i>
    </aside>

  </section>
</template>

<script>
  export default {
    name: 'Guidelist',
    props: ['leave'],
    data:function() {
      return {
        guideId:1
      }
    },
    mounted() {
      this.ChangGuideName(1);
    },
    watch: {
      '$route': 'ChangGuideName'
    },
    methods: {
      ChangGuideName:function(start) {
        this.guideId = this.$store.getters.getNowPathId(this.$route.path);
        if(start !== 1)this.$emit('closemob');
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
  #guide-name {
    height: 100%;
    display: flex;
  }
  .guide-name-p {
    flex: 1;
    text-align: center;
    padding-top: 18px;
    font-size: 13.5px;
    letter-spacing: 4px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    border-bottom:0px #212121 solid;
    transition: border-bottom-width 0.15s;
  }
  .guide-name-p:hover {
    border-bottom-width: 2px;
  }
  @media screen and (max-width: 940px) {
    #guide-name {
      flex-direction: column;
      height: 400px;
    }
    .guide-name-p:hover {
      border-bottom-width: 0px;
    }
  }
</style>
