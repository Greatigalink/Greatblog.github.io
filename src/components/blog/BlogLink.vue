<template>
  <div id="link-auto">
    <header class="link-header">
      <section>
        <h1>友情链接</h1>
        <h3>交流也是互相学习</h3>
      </section>
    </header>
    <link-body></link-body>
  </div>
</template>

<script>
  import linkbody from '../function/Link/linkbody.vue'
  export default {
    name: 'BlogLink',
    components: {
      'link-body': linkbody,
    },
    data:function() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .link-header {
    margin: 100px 8% 0 8%;
    height: 370px;
    padding: 1px;
    color: white;
    text-align: center;
    background: url(http://101.37.83.157:3000/images/headback/link.jpg);
    background-size: 100% 370px;
    background-repeat: no-repeat;
    section {
      margin-top: 100px;
    }
  }
  @media screen and (max-width: 930px) {
    .link-header {
      height: 270px;
      margin: 30px 2% 0 2%;
      section {
        margin-top: 130px;
      }
      background-size: 150% 340px;
    }
  }
</style>
