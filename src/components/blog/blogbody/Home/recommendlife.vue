<template>
  <div id="recd-life">
    <header class="recd-life-head">
      <i class="el-icon-s-custom"></i>
      <span style="color: #1F2833;"><b>在路上</b></span>
    </header>
    <ul class="redc-life-location">
     <recd-life v-for="post in lifeposts"
        :key="post.id"
        :post="post"
     >
     </recd-life>
    </ul>
    <section class="life-more">
      <i class="el-icon-circle-plus"></i>
      More
    </section>
  </div>
</template>

<script>
  import recdlife from '../../../function/Home/recdlife.vue'
  export default {
    name:'recdlife',
    components: {
      'recd-life': recdlife
    },
    data:function() {
      return {
        lifeposts:[
          {id:1,title:''},
          {id:2,title:''},
          {id:3,title:''},
          {id:4,title:''}
        ]
      }
    }
  }
</script>

<style>
  #recd-life {
    margin: 50px 8% 0px 8%;
    /* border: 1px blue solid; */
    padding: 10px;
  }
  .recd-life-head {
    /* border: 1px black solid; */
    margin: 10px 70% 0px 9%;
    font-size: 17px;
  }
  .redc-life-location {
    margin: 20px 1% 20px 1%;
    /* border: 1px green solid; */
  }
  .life-more {
    margin: 5px 13% 0px 80%;
    color: #182628;
    cursor: pointer;
    font-size: 17px;
  }
</style>
