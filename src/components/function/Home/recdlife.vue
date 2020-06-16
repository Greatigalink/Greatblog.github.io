<template>
  <li id="recd-life-li">
    <section class="recd-life-content">
      <img src="../../../assets/logoko.png" class="recd-life-img" />
      <article class="recd-life-p">
        <p style="font-size: 18px;line-height: 15px;color: #D79922;">颓废的日子大家都很难受</p>
        <p style="font-size: 13px;letter-spacing: 1px;line-height: 17px;color: #5A5560;">
          可是总有一天会改变的,俗话说不经历风雨怎能见彩虹,是继续向前还是归于平庸...
        </p>
      </article>
      <footer class="recd-life-mark">
        <aside class="recd-life-time">
          <i class="el-icon-date"></i>
          <span style="color: #5A5560;">2017-03-23</span>
        </aside>
        <aside class="life-readmore">
          <el-button type="warning" size="small">阅读更多</el-button>
        </aside>
      </footer>
    </section>
  </li>
</template>

<script>
  export default {
    name:'recdlife',
    props:['post']
  }
</script>

<style>
  #recd-life-li {
    margin: 10px 0px 20px 2.8%;
    list-style: none;
    /* cursor: pointer; */
    display: inline-block;
  }
  .recd-life-content {
    /* border: 1px red solid; */
    width: 480px;
    height: 190px;
    padding: 1px;
    background-color: white;
    /* border-radius: 10px 10px 0px 0px; */
    position: relative;
  }
  .recd-life-img {
    margin: 10px 0px 0px 2%;
    width: 220px;
    height: 135px;
    /* border-radius: 10px 10px 0px 0px; */
  }
  .recd-life-p {
    position: absolute;
    top: 11px;
    left: 51%;
    width: 210px;
    height: 130px ;
    /* border: 1px black solid; */
    padding: 3px;
  }
  .recd-life-mark {
    margin: 5px 2% 0px 2%;
    /* border: 1px yellow solid; */
  }
  .recd-life-time {
    display: inline-block;
    /* border: 1px red solid; */
    font-size: 12px;
  }
  .life-readmore {
    display: inline-block;
    font-size: 12px;
    margin: 0px 0px 0px 61%;
  }
</style>
