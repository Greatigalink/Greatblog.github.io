<template>
  <div id="link-list">
    <ul style="margin: 0px;padding: 0px;">
      <li v-for="post in linklist"
        :post="post"
        class="link-list-li"
      >
        <a :href="post.WebAddr" target="_blank" style="width: 100%;height: 100%;text-decoration: none;">
          <section class="link-list-a">
            <section class="link-list-preview">
              <img :src="post.WebPreview" />
            </section>
            <section class="link-list-head">
              <aside class="link-list-head-avator">
                <el-avatar :size="63" :src="post.AvatorSrc"></el-avatar>
              </aside>
              <aside class="link-list-head-con">{{post.Name}}</aside>
            </section>
            <section class="link-list-body">
              <b>{{post.Describe}}</b>
            </section>
          </section>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'linklist',
    data:function() {
      return {
        linklist: []
      }
    },
    mounted() {
      this.getLinkMsg()
    },
    methods: {
      getLinkMsg() {
        this.axios.post('/link/linkmsg').then((response)=>{
          this.linklist = response.data
        }).catch(err=>{
          alert('服务器出错了')
        })
      }
    }
  }
</script>

<style>
  #link-list {
    margin: 20px 3% 0px 3%;
    padding: 1px;
  }
  .link-list-li {
    margin: 15px 0px 15px 25px;
    display: inline-block;
    vertical-align: top;
    list-style: none;
    background-color: white;
    width: 275px;
    height: 290px;
    cursor: pointer;
    transition: box-shadow 0.5s;
  }
  .link-list-li:hover {
    box-shadow: 3px 3px 10px #795548;
  }
  .link-list-a {
    width: 100%;
    height: 100%;
    letter-spacing: 1.5px;
  }
  .link-list-preview {
    margin: 0px;
    height: 140px;
  }
  .link-list-preview img {
    width: 100%;
    height: 100%;
  }
  .link-list-head {
    padding:20px 5px 5px 5px;
    color: #00838f;
    display: flex;
  }
  .link-list-head-avator {
    flex: 0.5;
    padding-left: 20px;
  }
  .link-list-head-avator span {
    background-color: white;
    padding: 5px;
  }
  .link-list-head-con {
    flex: 1;
    padding-top: 20px;
    font-weight: bold;
    font-size: 15px;
  }
  .link-list-body {
    padding:5px 5px 5px 20px;
    font-size: 12.5px;
    color: #795548;
    line-height: 20px;
  }
  @media screen and (max-width: 950px) {
    .link-list-li {
      margin: 15px 0px 15px 8%;
      width: 285px;
    }
  }
</style>
