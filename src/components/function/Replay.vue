<template>
  <div id="replay">
    <el-dialog
      :visible.sync="open"
      :before-close="handleClose"
      class="ry-dialog"
      center
    >
      <section>
        <h4 style="text-align: center;">{{title}}</h4>
        <input v-model="name" placeholder="昵称"/>
        <aside>{{warning.n}}</aside>
        <input v-model="email" placeholder="邮箱(非必填)"/>
        <aside>{{warning.e}}</aside>
        <input v-model="avatar" placeholder="头像地址(非必填)"/>
        <textarea v-model="content" placeholder="内容" rows="6"/>
        <aside>{{warning.c}}</aside>
      </section>
      <aside><el-button type="primary" @click="submitRy" round>提交</el-button></aside>
    </el-dialog>
  </div>
</template>

<script>
  import {Dialog,Button} from 'element-ui'
  export default {
    name: 'Replay',
    props: ['openRy','ryMsg'],
    components: {
      ElDialog: Dialog,
      ElButton: Button
    },
    data:function() {
      return {
        open: this.openRy,
        title: '',
        name: '',
        email: '',
        avatar: '',
        content: '',
        warning: {
           n: '',e: '',c: ''
        },
        msg: this.ryMsg.msg,
        type: this.ryMsg.type,
        belone: this.ryMsg.belone
      }
    },
    mounted() {
      this.startTitle();
    },
    methods: {
      startTitle() {
        this.title = '回复 > ' + (this.type ? this.msg.Name : this.msg.RyName);
      },
      submitRy() {
        var rymsg = {
          RyName: this.name,
          RyedName: this.type ? this.msg.Name : this.msg.RyName,
          AvatarSrc: this.avatar,
          Time: this.$store.getters.getNowData,
          Content: this.content,
          Emial: this.email,
          LyId: this.msg._id
        }
        if(this.belone == 'ly') {
          if(this.checkMsg()) {
            this.axios.post('/about/submitRy',{ryMsg: rymsg}).then((reponse) => {
              if(reponse.data) {
                this.open = false;
                this.$emit('closeRy');
                this.open2('提交成功 (*^▽^*) ','success');
                this.$store.commit('setterSubLeaveSay', {subly: true});
              }
              else this.open2('提交失败','error');
            }).catch(err => {
              this.open2('出现其他错误','warning');
            })
          }
        }
        else {
          rymsg.ArtId = this.$route.query.artId;
          if(this.checkMsg()) {
            this.axios.post('/art/artcomry',{ryMsg: rymsg}).then((reponse) => {
              if(reponse.data) {
                this.open = false;
                this.$emit('closeRy');
                this.open2('提交成功 (*^▽^*) ','success');
                this.$store.commit('setterSubArtCom', {subTF: true});
              }
              else this.open2('提交失败','error');
            }).catch(err => {
              this.open2('出现其他错误','warning');
            })
          }
        }
      },
      checkMsg() {
        var nameMsg = this.$store.getters.checkName(this.name);
        var emailMsg = this.$store.getters.checkEmail(this.email);
        var contentMsg = this.$store.getters.checkContent(this.content);
        this.warning.n = nameMsg === 0 ? '不能含有空格或者为空!' : '';
        this.warning.e = emailMsg === 2 ? '邮箱自定义部分由数字、字母、下划线组成' : '';
        this.warning.c = contentMsg === 0 ? '内容不能为空' : '';
        return nameMsg === 0 || emailMsg === 2 || contentMsg === 0 ? false : true;
      },
      handleClose(done) {
        if(open) {
          done();
          this.$emit('closeRy');
        }
      },
      open2(msg,type) {
        this.$message({
          showClose: true,
          message: msg,
          type: type
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  #replay {
    padding: 0px 30% 0px 30%;
    section {
      display: flex;
      flex-direction: column;
      aside {
        line-height: 12px;
        color: #990000;
        font-size: 10px;
      }
      input,textarea {
        margin: 10px 0px 10px 0px;
        padding: 5px;
        border: 1px #00bcd4 solid;
        border-radius: 5px;
        outline: none;
        font-size: 12px;
      }
    }
    aside {
      text-align: center;
    }
  }
  .ry-dialog {
    margin: 0px 20% 0px 20%;
  }
  @media screen and (max-width: 450px){
    .ry-dialog {
      margin: 0px 1% 0px 1%;
    }
  }
</style>
