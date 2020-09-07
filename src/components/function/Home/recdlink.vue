<template>
  <div class="recd-link">
    <header>
      <i class="el-icon-paperclip"> 最新友情链接</i>
      <i @click="JumpLink()" class="el-icon-circle-plus"> 更多...</i>
    </header>
    <div v-if="topOwer < 600 || isload">
      <article
        v-for="post in linkMsg"
        :key="post.id"
        :post="post"
        class="recd-link-body"
      >
        <a :href="post.WebAddr" target="_blank">
          <header>
            <el-avatar :src="post.AvatarSrc" :size="53"></el-avatar>
          </header>
          <article>
            <p>{{post.Name}}</p>
            <footer>{{post.Describe.length > 10 ? (post.Describe.slice(0,10) + '...') : post.Describe}}</footer>
          </article>
        </a>
      </article>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'recdLink',
  data() {
    return {
      linkMsg: [],
      isload: false,
      linkDoc: '',
      topOwer: 1300
    }
  },
  computed: {
    ...mapState({
      scrollTop: state => state.docScrollTop
    })
  },
  watch: {
    scrollTop:function(n,o) {
      var top = this.linkDoc.offsetTop - n;
      this.topOwer = top;
      if(top < (window.innerHeight - 150) && !this.isload) this.getLinkMsg();
    }
  },
  mounted() {
    this.linkDoc = document.getElementsByClassName('recd-link')[0];
    if(this.linkDoc.offsetTop - this.scrollTop < (window.innerHeight - 150))this.getLinkMsg();
  },
  methods: {
    getLinkMsg() {
      this.axios.post('/home/recdlink').then(res => {
        if(!res) alert('未查询到最新友链信息');
        else {
          this.linkMsg = res.data;
          this.isload = true;
        }
      }).catch(err => {
        console.log(err)
      })
    },
    JumpLink() {
      this.$router.push({
        path: '/bloglink'
      })
    }
  },
}
</script>

<style lang="scss" scoped>
  .recd-link{
    margin: 0px;
    padding: 1px 1px 20px 1px;
    background-color: white;
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
  }
  .recd-link-body{
    margin: 30px;
    box-shadow: 5px 5px 10px #757575;
    border-radius: 15px;
    animation: linkMsg 0.5s;
    transition: all 0.5s;
    a {
      text-decoration: none;
      display: flex;
      text-align: left;
      header {
        span {
          background-color: white;
          padding: 5px;
        }
      }
      article {
        margin-top: 10px;
        p {
          font-weight: bold;
          font-size: 14px;
          color: #e65100;
        }
        footer {
          font-size: 13px;
          color: #757575;
        }
      }
    }
  }
  .recd-link-body:hover {
    margin-left: 10px;
  }
  @keyframes linkMsg {
    from {
      opacity: 0;
      transform: scaleY(-1);
    }
    to {
      opacity: 1;
      transform: scaleY(1);
    }
  }
  @media screen and (max-width: 950px) and (min-width: 450px) {
    .recd-link{
      margin:10px 0px 20px 0%;
    }
  }
  @media screen and (max-width: 450px) {
    .recd-link{
      margin: 0;
    }
    .recd-link-body{
      width: 250px;
      height: 120px;
    }
  }
</style>