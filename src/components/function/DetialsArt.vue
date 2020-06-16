<template>
  <div id="detials-auto">
    <header class="detials-auto-header">
      <section style="margin-top: 150px;">
        <h1>欢迎指出文章错误</h1>
      </section>
    </header>
    <div class="detials-auto-Con">
      <des-con></des-con>
      <div v-if="isArt">
        <des-comment></des-comment>
        <des-display :nowType="{art: 'art'}"></des-display>
      </div>
    </div>
  </div>
</template>

<script>
  import detialscon from './Art/detialscon.vue'
  import artcomment from './Art/artcomment.vue'
  import artdisplay from './artcomdisplay.vue'
  export default {
    name: 'DetialsArt',
    components: {
      'des-con': detialscon,
      'des-comment': artcomment,
      'des-display': artdisplay
    },
    data:function() {
      return {
        Artwait: true,
        isArt: this.$store.state.isArt
      }
    },
    watch: {
      getIsArt:function(n,o) {
        if(n) this.isArt = true;
        else this.isArt = false;
      }
    },
    computed: {
      getIsArt() {
        return this.$store.state.isArt;
      }
    }
  }
</script>

<style>
  #detials-auto {
    padding-top: 10px;
    min-height: 700px;
  }
  .detials-auto-header {
    height: 470px;
    text-align: center;
    padding-top: 1px;
    color: white;
  }
  .detials-auto-Con {
     background-color: #ECECEC;
     padding: 10px 8% 20px 8%;
  }
  @media screen and (max-width: 950px) {
    .detials-auto-header {
      height: 390px;
    }
    .detials-auto-Con {
      padding: 10px 1% 20px 1%;
    }
  }
</style>
