<template>
  <div id="diary-auto">
    <header class="diary-head">
      <section style="margin-top: 160px;">
        <h1>日记</h1>
        <h3>记录生活中的小事和想法</h3>
      </section>
    </header>
    <section v-if="wait" v-loading="true"></section>
    <section v-else class="diary-list">
      <el-timeline>
        <el-timeline-item v-for="post in diarylist"
          :key="post.DiaryId"
          :post="post"
          :timestamp="post.Time"
          placement="top"
          type="primary"
          icon="el-icon-camera"
          size="large"
        >
          <el-card class="diary-card">
            <h2>{{post.Title}}</h2>
            <p>{{post.Content}}</p>
            <img v-if="post.ImgSrc === '' ? false : true" :src="post.ImgSrc" />
            <aside>Author: &nbsp;{{post.Author}}</aside>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </section>
  </div>
</template>

<script>
  import {Timeline,TimelineItem} from 'element-ui'
  export default {
    name: 'BlogDiary',
    components: {
      ElTimeline: Timeline,
      ElTimelineItem: TimelineItem
    },
    data:function() {
      return {
        diarylist: [
        ],
        msg: '请等待...',
        wait: true
      }
    },
    mounted() {
      this.axios.post('/diary/diarylist').then((response)=>{
        this.diarylist = response.data;
        this.wait = false;
      }).catch(err=>{
        this.wait = true;
        this.msg = '好像出问题了，请重试一下 (｡･ω･｡)';
      });
    }
  }
</script>

<style>
  #diary-auto {
    padding-top: 1px;
    min-height: 500px;
  }
  .diary-head {
    height: 470px;
    text-align: center;
    color: white;
    padding: 1px;
  }
  .diary-list {
    background-color: white;
    padding: 30px 5% 0px 5%;
    min-height: 700px;
    padding-right: 5%;
  }
  .diary-list div.el-timeline-item__timestamp{
    color: #ffd54f;
    font-weight: bold;
    font-size: 17px;
  }
  .diary-card {
    padding: 1px;
    letter-spacing: 1px;
    font-weight: bold;
    background-color: white;
  }
  .diary-card h2 {
    margin-top: 20px;
    color: #795548;
  }
  .diary-card p {
    color: #0097a7;
    font-size: 14px;
    line-height: 25px;
    white-space: pre-wrap;
  }
  .diary-card img {
    width: 69%;
    height: 360px;
  }
  .diary-card aside {
    margin-top: 13px;
    font-size: 13px;
    color: #757575;
  }
  @media screen and (max-width: 950px) {
    .diary-head {
      height: 375px;
    }
    .diary-list ul {
      margin: 0px;
      padding: 0px;
    }
    .diary-card img {
      width: 100%;
      height: 130px;
    }
    .diary-card p {
      font-size: 13px;
    }
  }
</style>
