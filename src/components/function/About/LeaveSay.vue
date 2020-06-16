<template>
  <div id="LeaveSay">
    <header class="LeaveSay-head">
      <span>留言板</span>
    </header>

    <section class="LeaveSay-Warning">
      <ol>
        <li v-for="warning in warnings"
          :key="warning.id"
          :warning="warning"
        >
          <span>{{warning.value}}</span>
        </li>
      </ol>
    </section>

    <div class="LeaveSay-input">
      <section class="ly-input">
        <span>名字</span>
        <el-input placeholder="请输入名字"
          v-model="inputname"
          clearable>
        </el-input>
        <aside>{{namewarning}}</aside>
      </section>
      <section class="ly-input">
        <span>邮箱</span><br />
        <el-autocomplete
          style="width: 100%;"
          v-model="inputemail"
          :fetch-suggestions="querySearch"
          placeholder="请输入邮箱(非必填)"
          :trigger-on-focus="false"
        >
          <template slot-scope="{ item }">
            <div>{{ item.value }}</div>
          </template>
        </el-autocomplete>
        <aside>{{emailwarning}}</aside>
      </section>
      <section class="ly-input-content">
        <span>留言内容</span>
        <el-input type="textarea"
          :rows="5"
          placeholder="请输入内容"
          v-model="inputcon">
        </el-input>
        <aside>{{conwarning}}</aside>
      </section>

      <aside style="margin-bottom: 20px;font-weight: bold;">
        <aside style="font-size: 16px;color: #55BCC9;letter-spacing: 2px;">申请友链:</aside>
        <hr />
        <el-radio v-model="radio" label="1">互换呀</el-radio>
        <el-radio v-model="radio" label="0">以后再说</el-radio>
      </aside>

      <section v-if="linktrue" class="ly-input">
        <span>网址或域名</span>
        <el-input placeholder="请输入网址或域名"
          v-model="inputwebaddr"
        >
        </el-input>
        <span>图标</span>
        <el-input placeholder="请输入图标地址"
          v-model="inputavator"
        >
        </el-input>
        <span>描述</span>
        <el-input placeholder="请输入网站描述"
          v-model="inputdescribe"
        >
        </el-input>
      </section>
      <section class="ly-comment-Submit" @click="submit()">
        <i class="el-icon-check" style="font-size: 20px;"></i>
        <span style="font-size: 17px;font-weight: bold;color: white;">提交留言</span>
      </section>
    </div>
  </div>
</template>

<script>
  import {Radio,Autocomplete} from 'element-ui'

  export default {
    name: 'LeaveSay',
    components: {
      ElRadio: Radio,
      ElAutocomplete: Autocomplete
    },
    data:function() {
      return {
        inputname: '',
        inputemail: '',
        inputcon: '',
        inputwebaddr: '',
        inputavator: '',
        inputdescribe: '',
        namewarning: '',
        emailwarning: '',
        conwarning: '',
        sumE: 0,
        sumN: 0,
        sumC: 0,
        linktrue: false,
        radio: false,
        warnings: [
          {id: 1, value: '如果需要博主回复可以留下邮箱，也可不留，名字自定。'},
          {id: 2, value: '请注意留言信息包括姓名、内容、链接在内不许出现违规违法内容，一经发现即刻删除。'},
          {id: 3, value: '如需申请友链可以填写信息并与留言一并提交，只是发表留言可以不填友链信息！'},
          {id: 4, value: '欢迎大家指出错误，提出意见!'}
        ],
        restaurants: []
      }
    },
    watch: {
      radio:function(n,o) {
        this.linktrue = n === '1' ? true : false;
      },
      inputemail:function(ne, oe) {
        this.restaurants = this.loadAll();
        this.sumE ++;
        if(this.sumE === 2){
          this.checkLyMsg();
          this.sumE = 0;
        }
        this.inputemail = ne;
      },
      inputname:function(nn, on) {
        this.sumN ++;
        if(this.sumN === 2){
          this.checkLyMsg();
          this.sumN = 0;
        }
        this.inputname = nn;
      },
      inputcon:function(nc, oc) {
        this.sumC ++;
        if(this.sumC === 2){
          this.checkLyMsg();
          this.sumC = 0;
        }
        this.inputcon = nc;
      }
    },
    methods: {
      querySearch(queryString, callback) {
        for (var item in this.restaurants) {
          if(this.inputemail.match("@") === null)
            this.restaurants[item].value = this.inputemail + '' + this.restaurants[item].value;
          else
            continue;
        };
        callback(this.restaurants);
      },
      loadAll() {
        return [
          {"value": "@126.com"},
          {"value": "@163.com"},
          {"value": "@qq.com"},
          {"value": "@139.com"},
          {"value": "@sina.com"},
          {"value": "@sohu.com"}
        ]
      },
      submit() {
        if(this.checkLyMsg()) {
          var data = {
            Name: this.inputname,
            Email: this.inputemail,
            Content: this.inputcon,
            Time: this.$store.getters.getNowData,
            AddressIp: '127.1.0.1',
            ApplyLink: this.linktrue,
            WebAddr: this.inputwebaddr,
            AvatorSrc: this.inputavator,
            Describe: this.inputdescribe,
            Access: false
          }
          this.axios.post('/about/submitly', {data: data}).then((response)=>{
            if(response.data) {
              this.open2();
              this.$store.commit('setterSubLeaveSay', {subly: true});
              this.inputname = this.inputemail = this.inputcon = this.inputwebaddr = this.inputavator = this.inputdescribe = '';
              this.linktrue = false;
              this.sumN = this.sumC = this.sumE = 0;
            }
            else alert('提交失败请重试');
          }).catch(err=>{
            alert('服务器出错了!请刷新...');
          })
        }
      },
      checkLyMsg() {
        var inputname = this.$store.getters.checkName(this.inputname);
        var inputemail = this.$store.getters.checkEmail(this.inputemail);
        var inputcon = this.$store.getters.checkContent(this.inputcon);
        this.namewarning = inputname === 0 ? '名字不能包含空格或者为空!' : '';
        this.conwarning = inputcon === 0 ? '内容不能为空!' : '';
        this.emailwarning = inputemail === 2 ? '邮箱自定义部分由数字、字母、下划线组成' : '';
        return inputname === 0 || inputcon === 0 || inputemail === 2 ? false : true;
      },
      open2() {
        this.$message({
          showClose: true,
          message: '提交成功 (*^▽^*) ',
          type: 'success'
        });
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style>
  #LeaveSay {
    margin: 100px 0% 0px 0%;
    background-color: white;
    padding: 10px 10% 10px 10%;
  }
  .LeaveSay-head {
    margin: 30px 10% 0px 10%;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #8d6e63;
    letter-spacing: 5px;
  }
  .LeaveSay-Warning {
    margin: 10px 0px 50px 0px;
    padding: 10px;
    line-height: 30px;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bold;
    color: #795548;
    background-color: #ECECEC;
    border-left: 5px #e57373 solid;
  }
  .LeaveSay-input {
    margin-top: 20px;
    padding: 10px 8% 10px 8%;
  }
  .LeaveSay-input span {
    letter-spacing: 2px;
    font-size: 13px;
    color: #795548;
    font-weight: bold;
  }
  .LeaveSay-input span.el-radio__inner {
    border-color: black;
  }
  .ly-input input.el-input__inner {
    margin: 10px 0px 20px 0px;
    background-color: white;
    border-color: white;
    border-bottom: 2px #00bcd4 solid;
    border-left: 2px #00bcd4 solid;
    transition: all 0.3s;
  }
  .ly-input input::placeholder {
    color: #757575;
  }
  .ly-input input:hover {
    transform: scaleX(1.01);
  }
  .LeaveSay-input aside {
    margin-bottom: 10px;
    color: #ef5350;
    font-size: 13px;
  }
  .ly-input-content textarea.el-textarea__inner{
    margin: 10px 0px 30px 0px;
    background-color: white;
    border-color: white;
    border-bottom: 2px #00bcd4 solid;
    border-left: 2px #00bcd4 solid;
  }
  .ly-input-content textarea::placeholder {
    color: #757575;
    font-size: 13px;
    font-weight: bold;
  }
  .ly-comment-Submit {
    margin: 10px 35% 10px 35%;
    background-color: #00acc1;
    border-radius: 10px;
    height: 37px;
    text-align: center;
    color: white;
    padding-top: 12px;
    letter-spacing: 2px;
    cursor: pointer;
  }
  @media screen and (max-width: 950px) {
    #LeaveSay {
      margin: 100px 0% 0px 0%;
    }
    .LeaveSay-input {
      padding: 10px 1% 10px 1%;
    }
    .ly-comment-Submit {
      margin: 10px 15% 10px 15%;
    }
  }
</style>
