<template>
  <section id="guide-name">

    <router-link to="/bloghome" class="guide-name-p">
      <aside :style="{color: guideId == 1 ? '#4dd0e1' : ''}">
        <i class="el-icon-s-home"></i>首页
      </aside>
    </router-link>

    <router-link to="/blogart" class="guide-name-p">
      <aside :style="{color: guideId == 2 ? '#4dd0e1' : ''}">
        <i class="el-icon-s-order"></i>文章
      </aside>
    </router-link>

    <div class="guide-name-onroad" disabled="disabled" title="正在开发,敬请期待...">
      <aside></aside>在路上
    </div>

    <router-link to="/blogdiary" class="guide-name-p">
      <aside :style="{color: guideId == 4 ? '#4dd0e1' : ''}">
        <i class="el-icon-camera-solid"></i>日记
      </aside>
    </router-link>

    <router-link to="/bloglink" class="guide-name-p">
      <aside :style="{color: guideId == 5 ? '#4dd0e1' : ''}">
        <i class="el-icon-paperclip"></i>友链
      </aside>
    </router-link>

    <router-link to="/blogabout" class="guide-name-p">
      <aside :style="{color: guideId == 6 ? '#4dd0e1' : ''}">
        <i class="el-icon-s-custom"></i>关于
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
    padding-top: 17px;
    font-size: 14px;
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
  .guide-name-onroad {
    flex: 1;
    padding-top: 17px;
    text-align: center;
    font-size: 14px;
    color: #bdbdbd;
    letter-spacing: 4px;
    text-decoration: none;
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
