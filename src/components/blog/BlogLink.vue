<template>
  <div id="link-auto">
    <header class="link-header">
      <section style="margin-top: 160px;">
        <h1>友情链接</h1>
        <h3>友情互访，加强交流</h3>
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

<style>
  #link-auto {
  }
  .link-header {
    height: 470px;
    padding: 1px;
    color: white;
    text-align: center;
  }
  @media screen and (max-width: 930px) {
    .link-header {
      height: 375px;
    }
  }
</style>
