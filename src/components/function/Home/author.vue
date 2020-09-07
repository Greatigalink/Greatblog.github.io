<template>
  <div class="home-author">
    <header>
      <el-avatar :size="60" src="http://www.tzwlink.xyz/static/great.png"></el-avatar>
      <aside>努力'向前</aside>
    </header>
    <article>
      <section>
        <aside 
          v-for="post in classify"
          :key="post.id"
          :post="post"
          @click="jumpArt(post)"
        >
          {{post.label}}
        </aside>
      </section>
      <p><b>博主是一个学习中的前端小萌新</b></p>
      <p><b>欢迎你一起讨论学习哦~~</b></p>
      <p style="color: #00acc1;"><b><i class="el-icon-discount"></i> 别人云亦云，要有自己的思考</b></p>
    </article>
    <footer>
      <svg @click="callGreat(callMe[0].src)" t="1594300384536" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3663" width="200" height="200"><path d="M877.519238 671.695238c-5.753905-81.481143-59.026286-149.77219-89.819428-185.10019 4.266667-10.264381 14.677333-69.753905-25.502477-110.348191 0.073143-0.975238 0.073143-1.950476 0.073143-2.876952C762.270476 213.284571 651.264 98.03581 512 97.52381c-139.264 0.536381-250.270476 115.760762-250.270476 275.846095 0 0.950857 0 1.926095 0.073143 2.876952-40.17981 40.594286-29.744762 100.08381-25.502477 110.348191-30.768762 35.328-84.041143 103.619048-89.819428 185.124571-1.048381 21.430857 2.194286 52.638476 12.361143 66.511238 12.434286 16.920381 46.543238-3.413333 70.92419-57.441524 6.777905 25.039238 22.430476 63.268571 57.880381 111.762286-59.318857 13.897143-76.214857 73.947429-56.271238 106.788571 14.06781 23.113143 46.275048 42.130286 101.790476 42.130286 98.767238 0 142.384762-27.233524 161.865143-46.226286 3.949714-4.144762 9.679238-6.119619 16.969143-6.144 7.289905 0 13.019429 1.999238 16.969143 6.144 19.480381 18.992762 63.097905 46.226286 161.840762 46.226286 55.53981 0 87.722667-19.017143 101.790476-42.154666 19.968-32.816762 3.047619-92.867048-56.222476-106.764191 35.425524-48.518095 51.102476-86.723048 57.880381-111.762286 24.380952 54.052571 58.465524 74.361905 70.899809 57.441524 10.191238-13.897143 13.409524-45.104762 12.361143-66.511238z" fill="#8a8a8a" p-id="3664"></path></svg>
      <svg @click="callGreat(callMe[1].src)" t="1594300420897" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4659" width="200" height="200"><path d="M512 896a510.4 510.4 0 0 1-182.4-33.152l-198.592 94.08 60.8-176.32C112.832 711.36 64 616.576 64 512c0-212.096 200.576-384 448-384s448 171.904 448 384-200.576 384-448 384zM320 512a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m384 0a64 64 0 1 0 0-128 64 64 0 0 0 0 128z" p-id="4660" fill="#8a8a8a"></path></svg>
      <svg @click="callGreat(callMe[2].src)" t="1594300450791" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5441" width="200" height="200"><path d="M960 512a435.2 435.2 0 0 1-85.76 263.36 440 440 0 0 1-220.48 161.92 26.88 26.88 0 0 1-23.04-4.16 22.72 22.72 0 0 1-7.04-17.6v-122.88a104.64 104.64 0 0 0-30.4-82.88 416 416 0 0 0 59.52-10.24 218.24 218.24 0 0 0 54.72-23.04 164.8 164.8 0 0 0 47.04-38.4 184 184 0 0 0 32-61.44 293.76 293.76 0 0 0 12.16-88 168.64 168.64 0 0 0-46.4-120 154.88 154.88 0 0 0-4.48-119.04 76.48 76.48 0 0 0-47.04 6.4 300.48 300.48 0 0 0-53.76 25.6l-22.08 13.76a416 416 0 0 0-224 0c-6.4-4.48-14.4-9.28-24.64-15.68A326.08 326.08 0 0 0 326.4 256a82.88 82.88 0 0 0-50.24-8 156.8 156.8 0 0 0-4.16 120 173.76 173.76 0 0 0-46.08 120.64A288 288 0 0 0 238.08 576a196.48 196.48 0 0 0 32 61.44 152 152 0 0 0 47.04 39.04 267.84 267.84 0 0 0 54.72 23.04 414.08 414.08 0 0 0 59.84 10.24 92.48 92.48 0 0 0-28.8 60.16 99.2 99.2 0 0 1-26.56 8.32 167.36 167.36 0 0 1-32 2.88A69.12 69.12 0 0 1 303.36 768a109.44 109.44 0 0 1-32-36.48 96 96 0 0 0-28.16-30.4 80.64 80.64 0 0 0-28.8-14.08h-11.52a41.6 41.6 0 0 0-16.96 2.56q-4.8 2.88-2.88 6.72a44.16 44.16 0 0 0 5.44 8 55.36 55.36 0 0 0 7.68 7.36l4.16 2.56a78.08 78.08 0 0 1 25.6 22.08 157.76 157.76 0 0 1 18.24 29.44l5.76 13.44a72.32 72.32 0 0 0 25.6 36.16 96 96 0 0 0 38.72 16.64 196.16 196.16 0 0 0 40.32 4.16 182.08 182.08 0 0 0 32-2.24l13.44-2.24v83.84a23.04 23.04 0 0 1-7.68 17.6 27.84 27.84 0 0 1-23.36 4.16 438.08 438.08 0 0 1-219.2-162.88A427.84 427.84 0 0 1 64 512a437.44 437.44 0 0 1 60.16-224A443.52 443.52 0 0 1 288 124.16 437.44 437.44 0 0 1 512 64a437.44 437.44 0 0 1 224 60.16A443.52 443.52 0 0 1 899.84 288 436.8 436.8 0 0 1 960 512z" p-id="5442" fill="#8a8a8a"></path></svg>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'author',
  data() {
    return {
      classify: [],
      callMe: [
        {id: 1, src: 'http://101.37.83.157:3000/images/callimg/QQ.jpg'},
        {id: 2, src: 'http://101.37.83.157:3000/images/callimg/WeChat.png'},
        {id: 3, src: 'https://github.com/Greatigalink'}
      ]
    }
  },
  mounted() {
    this.getClassCount()
  },
  methods: {
    callGreat(s) {
      window.open(s);
    },
    getClassCount() {
      var classIfy = []
      this.axios.post('/home/classCount').then(res => {
        if(!res) alert('false')
        else {
          res.data.forEach(item => {
            var list = {}
            list.id = item.children[0].id;
            list.label = item.label;
            list.childLabel = item.children[0].label;
            list.count = item.children[0].count;
            classIfy.push(list);
          })
          this.classify = classIfy;
        }
      }).catch(err => {
        console.log(err);
      })
    },
    jumpArt(s) {
      this.$router.push({
        path: '/blogart',
        name: 'blogart',
        query: {
          id: s.id,
          label: ' > ' + s.label + ' > ' + s.childLabel,
          count: s.count
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
  .home-author {
    border-right: 1px #bdbdbb solid;
    position: absolute;
    top: 700px;
    left: 0%;
    width: 300px;
    height: 400px;
    letter-spacing: 1.5px;
    text-align: center;
    header {
      padding: 30px 15px 5px 15px;
      span {
        background-color: white;
      }
    }
    article {
      padding: 20px 0px 20px 0px;
      section:nth-child(1) {
        margin: 20px 0px 10px 0px;
        font-size: 12px;
        aside {
          border: 1px solid;
          display: inline-block;
          cursor: pointer;
          border-radius: 15px;
          color: black;
          padding: 7px;
          margin: 5px;
          transition: all 0.5s;
        }
        aside:hover {
          background-color: #3f51b5;
          color: white;
          border: 1px white solid;
        }
      }
      p {
        padding: 0px 30px 0px 35px;
        font-size: 11px;
        color: #757575;
      }
    }
    footer {
      svg {
        cursor: pointer;
        margin-right: 20px;
        width: 32px;
        height: 32px;
        path {
          transition: all 0.5s;
        }
      }
      svg:nth-child(1):hover path{
        fill:#0097a7;
      }
      svg:nth-child(2):hover path{
        fill:#388e3c;
      }
      svg:nth-child(3):hover path{
        fill:#212121;
      }
    }
  }
  @media screen and (max-width: 1300px) and (min-width: 950px) {
    .home-author {
      width: 200px;
      height: 370px;
    }
  }
  @media screen and (max-width: 950px) and (min-width: 450px){
    .home-author {
      position: static;
      width: 100%;
      height: 200px;
      article {
        section:nth-child(1) {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 450px){
    .home-author {
      header {
        padding-top: 5px;
      }
      article {
        section:nth-child(1) {
          display: none;
        }
      }
      position: static;
      width: 100%;
      height: 150px;
    }
  }
</style>