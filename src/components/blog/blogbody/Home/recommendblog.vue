<template>
  <div id="recd-article">
    <header class="recd-art-head">
      <i class="el-icon-s-order"></i>
      <span style="color: #1F2833;"><b>推荐文章</b></span>
    </header>
    <ul class="redc-art-location">
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
        artposts:[
        ],
        showrecdart:false
      }
    },
    mounted() {
      this.axios.post('/home/recdpost').then((response)=>{
        if(response.data === 'error')console.log('查询失败');
        else this.artposts = response.data;
      }).catch(err=>{
        console.log('No')
      });
      this.showrecdart = true;
    }

  }
</script>

<style>
  #recd-article {
    margin: 20px 5% 100px 5%;
    padding: 1px;
    background-color: white;
  }
  .recd-art-head {
    margin-top: 30px;
    font-size: 19px;
    text-align: center;
  }
  .redc-art-location {
    margin: 50px 10% 20px 10%;
  }
  @media screen and (max-width: 950px) {
    .redc-art-location {
      margin: 20px 3% 20px 3%;
      padding: 0px;
    }
    #recd-article {
      margin: 0% 1% 10px 1%;
      padding: 1px;
      background:rgba(255,255,255,0);
    }
    .recd-art-head {
      margin-top: 0px;
    }
  }
</style>
