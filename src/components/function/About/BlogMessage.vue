<template>
  <div id="aboutblog">

    <section class="aboutblog-auto">
      <header class="aboutblog-title">
        <i class="el-icon-s-custom"></i>
        <p>About Me</p>
      </header>
      <section class="aboutblog-li">
        <aside class="aboutblog-li-p">
          <i class="el-icon-location"></i>
          <p>坐标湖南，现计算机专业大三在读</p>
          <i class="el-icon-place"></i>
          <p> 家乡是少数名族最多的省份，考虑一下最后还是备案在自己的老家哈哈</p>
        </aside>
        <aside class="aboutblog-li-p" style="margin-top: 20px;">
          <i class="el-icon-reading"></i>
          <p>上了大学才接触的编程，以前都不知道，专业课教的知识很多很杂，一直不知道自己喜欢哪一个方向</p>
          <p>直到大三开学借助课程设计有幸看到同学做的前端项目，发现挺有趣的，自己也想尝试一下，就这样入了前端的坑</p>
          <p>2020这个特殊的寒假里，待在家学了Vue，所以想着写一个博客，一来练练手巩固所学知识，二来作为一个长期记录学习生活的地方</p>
        </aside>
      </section>
    </section>

    <section class="aboutblog-auto">
      <header class="aboutblog-title">
        <i class="el-icon-s-home"></i>
        <p>About Here</p>
      </header>
      <section class="aboutblog-li" style="line-height: 30px;">
        <aside class="aboutblog-li-p">
          <span>前端:</span>
          <span style="color: #fb8c00;font-weight: bold;">Vue + Vuex + Vue Router, Element-Ui</span>
        </aside>
        <aside class="aboutblog-li-p">
          <span>后端:</span>
          <span style="color: #fb8c00;font-weight: bold;">express + mongodb</span>
        </aside>
        <aside class="aboutblog-li-p">
          <span>部署:</span>
          <span style="color: #fb8c00;font-weight: bold;">阿里云提供的云服务器ECS(学生机每月10元, 1M带宽)</span>
        </aside>
        <aside class="aboutblog-li-p">
          <span>其他:</span>
          <span style="color: #fb8c00;font-weight: bold;">
            <p>暂时没搞https, 等以后功能完善了在搞吧, 博客后台和在路上模块还在开发</p>
            第一次写博客，优化和安全弄得不太好，以后慢慢学习不断改善吧，文章很少，内容也一般，往后一定要慢慢积累，提高质量
          </span>
        </aside>
        <aside class="aboutblog-li-p">
          <span>备注:</span>
          <span style="color: #fb8c00;font-weight: bold;">
            <p>博客里的原创文章转载需要标明来源，并且您不得把它作为商业目的，
            如果您喜欢我的博客样式，可以随便模仿，但需要标明来源</p>
            谢谢您的配合!
          </span>
        </aside>
      </section>
    </section>

    <section class="aboutblog-auto">
      <header class="aboutblog-title">
        <i class="el-icon-phone"></i>
        <p>Call Me</p>
      </header>
      <aside class="aboutblog-call">
        <el-avatar :size="38" class="aboutblog-call-li" title="1652891875" @click.native="getCallImgSrc('QQ')">
          <img src="../../../assets/qq.png" />
        </el-avatar>
        <el-avatar :size="38" class="aboutblog-call-li" @click.native="getCallImgSrc('WeChat')">
          <img src="../../../assets/wechat.png" />
        </el-avatar>
        <el-avatar :size="38" class="aboutblog-call-li" title="greatiga@126.com" @click.native="getCallImgSrc('Email')">
          <img src="../../../assets/email.png" />
        </el-avatar>
      </aside>
      <el-dialog
        title="欢迎提问,指出bug"
        :visible.sync="callDispaly"
        :width="callDisplayW"
      >
        <img :src="callImgSrc" style="width: 70%;height: 50%;" :alt="callAlt"/>
      </el-dialog>
    </section>
  </div>
</template>

<script>
  import {Dialog} from 'element-ui'
  export default {
    name: 'Aboutblog',
    components: {
      ElDialog: Dialog
    },
    data:function() {
      return {
        callImgSrc: '',
        callDispaly: false,
        callAlt: '',
        callDisplayW: this.$store.state.docWidth > 930 ? '23%' : '60%'
      }
    },
    methods: {
      getCallImgSrc(str) {
        // this.callDispaly = true;
        switch(str) {
          case 'QQ': this.callImgSrc = 'http://101.37.83.157:3000/images/callimg/QQ.jpg';break;
          case 'WeChat': this.callImgSrc = 'http://101.37.83.157:3000/images/callimg/WeChat.png';break;
          case 'Email': this.callImgSrc = 'mailto:gretiga@126.com';this.callAlt = 'greatiga@126.com';break;
        }
        window.open(this.callImgSrc);
      }
    }
  }
</script>

<style>
  #aboutblog {
    background-color: white;
    padding: 10px 6% 60px 3%;
  }
  .aboutblog-auto {
    margin-top: 50px;
    display: flex;
  }
  .aboutblog-title {
    flex: 1;
    color: #55BCC9;
    text-align: center;
    font-size: 60px;
    padding-top: 10px;
  }
  .aboutblog-title p {
    font-size: 20px;
  }
  .aboutblog-li {
    flex: 4;
    letter-spacing: 2px;
    padding: 15px;
    color: #8d6e63;
  }
  .aboutblog-call {
    flex: 4;
    margin-top: 30px;
  }
  .aboutblog-call span{
    background-color: white;
  }
  .aboutblog-li-p {
    text-align: left;
    font-size: 13px;
  }
  .aboutblog-li-p p{
    line-height: 17px;
  }
  .aboutblog-li-p i{
    color: #ffa726;
    font-size: 20px;
  }
  .aboutblog-call-li {
    margin: 20px;
    cursor: pointer;
    padding: 3px;
  }
  @media screen and (max-width: 950px) {
    .aboutblog-auto {
      flex-direction: column;
    }
    .aboutblog-li {
      width: 90%;
    }
    .aboutblog-call {
      text-align: center;
    }
  }
</style>
