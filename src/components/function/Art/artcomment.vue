<template>
  <div class="detials-Comment">
    <h2 style="text-align: center; color: #5d4037;">欢迎大家评论</h2>
    <h4 style="color: #f57f17;">特别说明</h4>
    <section class="detials-Warning">
      <ol>
        <li v-for="warning in warnings"
          :key="warning.id"
          :warning="warning"
        >
          <span>{{warning.value}}</span>
        </li>
      </ol>
    </section>
    <h5>名字</h5>
    <el-input
      class="detials-comment-input"
      type="text"
      placeholder="请输入名字"
      v-model="name"
    >
    </el-input>
    <p>{{nameWarning}}</p>
    <h5>邮箱</h5>
    <el-autocomplete
      style="width: 100%;"
      class="detials-comment-input"
      v-model="email"
      :fetch-suggestions="querySearch"
      placeholder="请输入邮箱(非必填)"
      :trigger-on-focus="false"
    >
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
      </template>
    </el-autocomplete>
    <p>{{emailWarning}}</p>
    <h5>内容</h5>
    <el-input
      class="detials-comment-Content"
      type="textarea"
      placeholder="请输入内容"
      v-model="content"
      rows=7
    >
    </el-input>
    <p>{{contentWarning}}</p>
    <section class="detials-comment-Submit" @click="submit()">
      <i class="el-icon-check" style="font-size: 20px;"></i>
      <span style="font-size: 17px;font-weight: bold;">提交评论</span>
    </section>
  </div>
</template>

<script>
  import {Autocomplete} from 'element-ui'
  export default {
    name: 'artcomment',
    components: {
      ElAutocomplete: Autocomplete
    },
    data:function() {
      return {
        name: '',
        email: '',
        content: '',
        warnings: [
          {id: 1,value: '暂未设置用户账号，发表评论无需登录，如果需要博主回复可以留下邮箱，也可不留，名字自定。'},
          {id: 2,value: '请注意评论信息包括姓名、内容在内不许出现违规违法内容，一经发现即刻删除。'},
          {id: 3,value: '现在暂时没有评论审核功能，提交就可以显示，欢迎大家指出错误，提出意见!'}
        ],
        restaurants: [],
        nameWarning: '',
        emailWarning: '',
        contentWarning: '',
        sumE: 0,
        sumN: 0,
        sumC: 0
      }
    },
    watch: {
      email:function(newE,oldE) {
        this.restaurants = this.loadAll();
        this.sumE ++;
        if(this.sumE === 2){
          this.CheckMsg();
          this.sumE = 0;
        }
        this.email = newE;
      },
      name:function(newN,oldN) {
        this.sumN ++;
        if(this.sumN === 2){
          this.CheckMsg();
          this.sumN = 0;
        }
        this.name = newN;
      },
      content:function(newC,oldC) {
        this.sumC ++;
        if(this.sumC === 2){
          this.CheckMsg();
          this.sumC = 0;
        }
        this.content = newC;
      },
      submitTrue:function(newSub, oldSub) {
        console.log(newSub, oldSub);
      }
    },
    methods: {
      querySearch(queryString, callback) {
        for (var item in this.restaurants) {
          if(this.email.match("@") === null)
            this.restaurants[item].value = this.email + '' + this.restaurants[item].value;
          else
            continue;
        };
        callback(this.restaurants)
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
        if(this.CheckMsg()) {
          var SubmitData = {
            ArtId: this.$route.query.artId,
            Name: this.name,
            Email: this.email,
            Content: this.content,
            Time: this.$store.getters.getNowData,
            AddressIp: '110.2.0.1'
          };
          this.axios.post('/art/artsubmit',{data: SubmitData}).then((response)=>{
            var judge = response.data;
            if(judge) {
              this.$store.commit('setterSubArtCom', {subTF: true});
              this.name = this.email = this.content = '';
              this.sumC = this.sumE = this.sumN = 0;
              this.open2();
            }
            else alert('提交失败，请重试');
          }).catch(err=>{
            console.log(err);
            alert('出现其他错误');
          });
        }
      },
      CheckMsg() {
        var nameMsg = this.$store.getters.checkName(this.name);
        var emailMsg = this.$store.getters.checkEmail(this.email);
        var contentMsg = this.$store.getters.checkContent(this.content);
        this.nameWarning = nameMsg === 0 ? '不能含有空格或者为空!' : '';
        this.emailWarning = emailMsg === 2 ? '邮箱自定义部分由数字、字母、下划线组成' : '';
        this.contentWarning = contentMsg === 0 ? '内容不能为空' : '';
        return nameMsg === 0 || emailMsg === 2 || contentMsg === 0 ? false : true;
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
  .detials-Comment {
    margin: 30px 0px 0px 0px;
    min-height: 400px;
    padding: 20px 10% 1px 10%;
    background-color: white;
  }
  .detials-Warning {
    margin: 10px 0px 50px 0px;
    padding: 10px;
    line-height: 30px;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bold;
    color: #795548;
    border-right: 5px #f44336 solid;
    border-left: 5px #f44336 solid;
  }
  .detials-comment-input input.el-input__inner {
    margin: 10px 0px 10px 0px;
    width: 100%;
    border-color: white;
    border-left-color: #4dd0e1;
    border-bottom-color: #4dd0e1;
  }
  .detials-comment-Content textarea.el-textarea__inner {
    margin: 10px 0px 10px 0px;
    border-color: white;
    border-left-color: #4dd0e1;
    border-bottom-color: #4dd0e1;
  }
  .detials-comment-Submit {
    margin: 10px 33% 10px 33%;
    background-color: #00acc1;
    border-radius: 10px;
    height: 37px;
    text-align: center;
    color: white;
    padding-top: 10px;
    letter-spacing: 2px;
    cursor: pointer;
  }
  .detials-Comment h5 {
    line-height: 15px;
    letter-spacing: 1px;
  }
  .detials-Comment p {
    color: red;
    font-size: 13px;
  }
  @media screen and (max-width: 950px) {
    .detials-comment-Submit {
      margin: 10px 23% 10px 23%;
    }
  }
</style>
