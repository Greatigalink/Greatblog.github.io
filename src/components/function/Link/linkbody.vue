<template>
  <div class="link-body">
    <link-list></link-list>
    <section class="link-body-Head">
      <ul>
        <li v-for="post in warning"
          :key="post.id"
          :post="post"
        >
          {{post.value}}
        </li>
      </ul>
      <h4 style="margin-left: 3%;color: #795548;">本站链接:</h4>
      <section class="link-body-mylink">
        <aside>名称: 努力'向前</aside>
        <aside>网址: http://www.tzwlink.xyz</aside>
        <aside>图标: http://www.tzwlink.xyz/static/great.png</aside>
        <aside>描述: 别人云亦云,要有自己的思考</aside>
      </section>
    </section>
    
  </div>
</template>

<script>
  import linklist from './linklist.vue'
  export default {
    name: 'linkbody',
    components: {
      'link-list': linklist
    },
    data:function() {
      return {
        warning: [
          {id: 1,value: '友链可以到留言部分申请，欢迎互换友链!'},
          {id: 2,value: '提交申请后我会尽快处理，若网站出现无法访问的情况，我会暂时保留，期间只要正常，立刻添加展示，若长时间不能访问将会删除。'},
          {id: 3,value: '若发现网站存在违规违法、不合道德舆论的内容，即刻删除。'},
          {id: 4,value: '申请后24小时内未添加贵站链接的可以私信我。网站因其他原因不能继续正常访问的，修改信息的直接私信我说一下就行了。'},
        ],
      }
    }
  }
</script>

<style>
  .link-body {
    background-color: white;
    padding: 50px 7% 0px 7%;
  }
  .link-body-Head {
    margin: 0px 0px 20px 0px;
    padding: 20px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .link-body-Head li {
    line-height: 30px;
    font-size: 14px;
    color: #546e7a;
  }
  .link-body-mylink {
    background-color: white;
    color: #757575;
    padding: 10px;
    margin: 10px 3% 10px 3%;
    line-height: 27px;
    font-size: 12px;
  }
  @media screen and (max-width: 950px) {
    .link-body {
      padding: 0px 0% 20px 0%;
    }
  }
</style>
