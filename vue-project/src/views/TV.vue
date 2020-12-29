<template>
  <div>
    <ul class="tv-list">
      <li
        class="tv-item"
        v-for="item in tvList"
        :key="item.id"
        @click="getDetail(item.id)"
      >
        <div class="img">
          <img :src="'http://images.weserv.nl/?url=' + item.cover.url" />
        </div>
        <div class="content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.info }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tvList: [],
      start: 0,
      isFinish: true,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.listenScroll();
  },
  methods: {
    /* 
    跨域问题：当你网页所在地址与接口的地址(协议，域名，端口号)，任何一个不同都会引发跨域问题(因为浏览器的同源策略)
     解决:jsonp,让后端帮你配置一下（cors，第三方服务器代理）
     */
    getData() {
      //只能用v2
      if (this.isFinish) {
        this.isFinish = false;
        let baseUrl = "https://bird.ioliu.cn/v2?url=";
        let tvUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=${this.start}&count=18`;
        this.axios
          .get(baseUrl + tvUrl)
          .then((res) => {
            this.tvList = this.tvList.concat(res.data.subject_collection_items);
            this.isFinish = true;
          })
          .catch((err) => console.log(err));
      }
    },
    //懒加载
    listenScroll() {
      //获取html元素
      let htmlDom = document.documentElement;
      let deviceHeight = htmlDom.clientHeight; //获取窗口的高度
      window.onscroll = () => {
        let fullHeight = htmlDom.offsetHeight; //页面的总高度
        let scrollTop = htmlDom.scrollTop; //滚动调距离顶部的距离
        if (scrollTop + deviceHeight > fullHeight - 20) {
          if (this.isFinish) {
            this.start += 10;
          }
          if (this.start < 50) {
            this.getData();
          }

          console.log("滚动到底部了");
        }
      };
    },
    //跳转电视剧详情页
    getDetail(id) {
      this.$router.push("/tvdetails/" + id);
    },
  }, //methods
}; //export
</script>

<style lang="scss" scoped>
.tv-list {
  .tv-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #cccccc;
    .img {
      flex: 3;
      img {
        width: 100%;
      }
    }
    .content {
      flex: 5;
      padding: 10px;
      h3 {
        font-weight: bolder;
        margin-bottom: 20px;
      }
    }
  }
}
</style>