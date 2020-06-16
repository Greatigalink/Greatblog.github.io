<template>
  <el-tree
    :data="data"
    accordion
    @node-click="handleNodeClick"
    class="blogart-class"
  >
  </el-tree>
</template>

<script>
  import {Tree} from 'element-ui'

  export default {
    name:'classify',
    components: {
      ElTree: Tree
    },
    data:function() {
      return {
        data: [],
        fatherClass: '',
        childClass: '',
        nowClass: ''
      }
    },
    methods: {
      getClassifyList() {
        this.axios.post('/art/classlist',).then((response)=>{
          this.data = response.data;
          this.sumAccount(response.data);
        }).catch(err=>{
          alert('无法加载分类');
        })
      },
      sumAccount(data) {
        var sum = 0;
        for(var i = 0; i < data.length; i++) {
          for(var j = 0; j < data[i].children.length; j++)
            sum += data[i].children[j].count;
        }
        this.$store.commit('setterNowAllArt', {account: sum});
      },
      handleNodeClick(data) {
        if(data.id === undefined)this.fatherClass = data.label;
        else {
          this.childClass = data.label;
          this.nowClass = ' > ' + this.fatherClass + ' > ' + this.childClass;
          this.$store.commit('setterNowClassify', {label: this.nowClass, id: data.id, count: data.count});
        }
      }
    },
    mounted() {
      this.getClassifyList();
    }
  }
</script>

<style>
  .blogart-class div.el-tree-node__content {
    margin: 10px;
    color: #a1887f;
  }
</style>
