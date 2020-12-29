<template>
  <header :style="{ backgroundColor: curMenu.bgColor  }">
    <span class="home"  @click="goHome">首页</span>
   {{curMenu.name}}</header>
</template>

<script>
import { mapState, mapMutations} from "vuex"

export default {
    computed: {
        ...mapState(["curMenu"])
    },
    methods: {
        ...mapMutations(["setCurMenu"]),
        goHome(){
            // 如果单写push这行，只能达到内容跳转回页面，但header和footer没有回
            this.$router.push("/");
            this.setCurMenu({
                name:"剧集",
                bgColor:"#ff0000",
            });
        },
    },

}
</script>

<style lang="scss" scoped>
   header{
       z-index: 666;
       width: 100%;
       height: 1rem;
       line-height: 1rem;
       text-align: center;
       background: #ff0000;
       position: fixed;
       top: 0;
       left: 0;
       color: #ffffff;
       .home{
           position: absolute;
           left: 0;
       }

   }
</style>