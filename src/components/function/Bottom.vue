<template>
  <div id="bottom-auto">
    <section class="bottom-guide">
      <aside style="color: #212121;">感谢您访问小站</aside>
      <aside style="color: #212121;">如果感觉不错可以收藏以便再次访问哦</aside>
      <img src="http://101.37.83.157:3000/images/callimg/smile.png" />
    </section>
    <section class="HomeBeian">
      <aside style="color: #212121;">CopyRight © 2020 努力'向前 All Rights Reserved</aside>
      <aside>
        <span>ICP备案号: </span>
        <a href="http://www.beian.miit.gov.cn"
          class="beianNumber"
          target="_blank"
        >
          滇ICP备20002333号
        </a>
      </aside>
      <aside>感谢阿里云提供的服务器:
        <a href="https://promotion.aliyun.com/ntms/act/campus2018.html?spm=a2c4e.11153940.0.0.6ebf732devWnm1&source=5176.11533457&userCode=kzp4uq6k&type=copy"
          class="aly-guide"
          target="_blank"
        >
          <img src="../../assets/aly.png" />
          云翼计划(学生专享)
        </a>
      </aside>
      <aside class="start-time">
        本站已运行 <span> {{startTimeDay}}</span> 天
        <span> {{startTimeHour}}</span> 时
        <span> {{startTimeMinutes}}</span> 分
        <span> {{startTimeLeave}}</span> 秒
      </aside>
    </section>
    <section class="bottom-call">
      <section>联系方式</section>
      <aside>QQ: 1652891875</aside>
      <aside>Email: greatiga@126.com</aside>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Bottom',
    props: ['BottomH'],
    data:function() {
      return {
        startTimeDay: '',
        startTimeHour: '',
        startTimeMinutes: '',
        startTimeLeave: '',
        startTime: '2020/05/09 17:37:37'
      }
    },
    mounted() {
      this.showTime();
      this.sumStartTime();
    },
    methods: {
      sumStartTime() {
        var that = this;
        setInterval(function() {
          that.showTime();
        },1000);
      },
      showTime() {
        var now = new Date();
        var sub = now.getTime() - new Date(this.startTime).getTime();
        this.startTimeDay = Math.floor(sub / (24 * 3600 * 1000));
        var lea1 = sub % (24 * 3600 * 1000);
        this.startTimeHour = Math.floor(lea1 / (3600 * 1000));
        var lea2= lea1 % (3600 * 1000);
        this.startTimeMinutes = Math.floor(lea2/(60*1000));
        var lea3=lea2  %(60 * 1000);
        this.startTimeLeave = Math.round(lea3 / 1000);
      }
    }
  }
</script>

<style>
  #bottom-auto {
    margin: 0px;
    height: 96%;
    letter-spacing: 1.5px;
    display: flex;
    line-height: 25px;
    padding: 10px 0px 10px 0px;
  }
  .bottom-guide {
    flex: 1;
    text-align: center;
    color: white;
    font-size: 13px;
    border-right: 1px #757575 solid;
    padding: 33px 0px 27px 0px;
  }
  .HomeBeian {
    flex: 1.3;
    color: #757575;
    text-align: center;
    font-size: 12px;
    border-right: 1px #757575 solid;
    padding: 27px 0px 27px 0px;
  }
  .beianNumber {
    text-decoration: none;
    color: #4dd0e1;
    font-size: 12px;
  }
  .aly-guide {
    text-decoration: none;
    color: #f57c00;
    font-size: 12px;
  }
  .start-time span{
    font-size: 13px;
    color: #4dd0e1;
  }
  .bottom-call {
    flex: 1;
    text-align: left;
    color: #212121;
    padding: 33px 0px 27px 0px;
  }
  .bottom-call aside{
    margin-left: 15%;
    font-size: 12px;
    color: #757575;
  }
  .bottom-call section {
    margin:0px 0px 10px 15%;
    font-size: 13px;
  }
  @media screen and (max-width: 930px) {
    #bottom-auto {
      flex-direction: column;
    }
    .bottom-guide {
      border-right: 0px;
      border-bottom: 1px #757575 solid;
    }
    .HomeBeian {
      border-right: 0px;
      border-bottom: 1px #757575 solid;
    }
  }
</style>
