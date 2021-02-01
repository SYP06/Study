<template>
  <div>
    <div id="main-wrapper">
      <!-- Start Home -->
      <section class="home-bg section active" id="home">
        <div id="particles-js"></div>
        <div class="section-area">
          <div class="section-content">
            <div class="hero-text-area">
              <div class="welcome-area">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-12">
                      <div class="hero-text text-center">
                        <div class="wel-txt">Hello</div>
                        <span>I Am &nbsp;</span>
                        <span
                          class="word"
                          v-for="(letter, index) in words"
                          :key="index"
                          >{{ letter }}</span
                        >
                        <span class="typer-cursor">|</span>
                      </div>
                      <ul
                        class="informative-txt d-flex justify-content-center align-items-center"
                      >
                        <li>Web Enthusiast</li>
                        <li>
                          <i class="mdi mdi-circle mdi-10px ml-3 mr-3"></i>
                        </li>
                        <li>Book lover</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Home -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      words: [],
      str: "Sarah Song",
      letters: [],
      order: 1,
    };
  },
  watch: {
    order() {
      if (this.order % 4 == 1) {
        this.str = "Sarah Song!";
      } else if (this.order % 4 == 2) {
        this.str = "Web Enthusiast. ";
      } else if (this.order % 4 == 3) {
        this.str = "Book lover.";
      } else {
        this.str = "coding the web...";
      }
    },
  },
  mounted() {
    this.begin();
  },
  methods: {
    //开始输入的效果动画
    begin() {
      this.letters = this.str.split("");
      for (var i = 0; i < this.letters.length; i++) {
        setTimeout(this.write(i), i * 100);
      }
    },
    //开始删除的效果动画
    back() {
      let L = this.letters.length;
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 50);
      }
    },
    //输入字母
    write(i) {
      return () => {
        let L = this.letters.length;
        this.words.push(this.letters[i]);
        let that = this;
        /*如果输入完毕，在2s后开始删除*/
        if (i == L - 1) {
          setTimeout(function () {
            that.back();
          }, 2000);
        }
      };
    },
    //擦掉(删除)字母
    wipe(i) {
      return () => {
        this.words.pop(this.letters[i]);
        /*如果删除完毕，在300ms后开始输入*/
        if (this.words.length == 0) {
          this.order++;
          let that = this;
          setTimeout(function () {
            that.begin();
          }, 300);
        }
      };
    },
  },
};
</script>
<style scoped>
.home-bg {
    background: url('../assets/images/gratisography-430H.jpg') center no-repeat fixed;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    position: fixed;
    overflow:hidden;
    display: block;
}
.col-md-12{
    margin-top: 200px;
}
.hero-text .wel-txt {
    color: #fff;
    /* color: #333; */
    font-size: 20px;
    font-weight: 400;
}
.hero-text  span {
    font-weight: 700;
    color: #fff;
    font-size: 34px;
    margin-bottom: 5px;
}
.typer-dynamic{
    position: relative;
  }
  .typer-cursor{
    height: 100%;
    width: 3px;
    animation: flash 1.5s linear infinite;
  }
.informative-txt {
    padding: 0;
    margin-top: 20px;
    list-style: none;
}

    .informative-txt li {
        color: #fff;
        font-size: 16px;
    }
/* ---- particles container ---- */
 #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
}

.particles-js-canvas-el {
    position: relative;
    z-index: 1;
}
</style>