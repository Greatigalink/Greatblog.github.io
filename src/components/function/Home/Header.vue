<template>
  <div class="blackback">
    <transition name="el-zoom-in-top">
      <section v-show="showintro" class="welcome">
        <article>
          <p class="welcome-p">Welcome &nbsp;to &nbsp;Here</p>
          <p style="font-size: 17px;color: white;">一切始于尘埃，也归于尘埃</p>
          <p style="font-size: 14px;color: white;">探索未知才是未来</p>
        </article>
      </section>
    </transition>
  </div>
</template>

<script>
  export default {
    name:'Header',
    data:function() {
    	return {
        showintro: false
    	}
    },
    mounted() {
      this.showintro = true;
    },
    methods:{
    }
  }
</script>

<style>
  .blackback {
    height: 100%;
    padding: 110px 0px 0px 3%;
  }
  .welcome {
    width: 100%;
    color: white;
    text-align: center;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .welcome-p {
    font-size: 60px;
    line-height: 35px;
  }
  @media screen and (max-width: 950px) {
    .welcome-p {
      font-size: 30px;
    }
  }
</style>
