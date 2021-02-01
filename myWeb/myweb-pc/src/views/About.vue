<template>
  <div>
    <!-- Start About-Us -->
      <section class="section bg-light line-vector" id="aboutus">
        <div class="section-area">
          <div class="section-content">
            <div class="container">
              <div class="title-block mx-auto">
                <div class="section_title mb-4 text-center">
                  <h2><span>About</span></h2>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-6 col-sm-12">
                  <div class="about-text-block">
                    <div class="about-content">
                      <h4>
                        KNOW<br />
                        ABOUT MYSELF
                      </h4>
                      <div class="text">
                        Have an interesting soul and a heart that loves life
                      </div>
                      <div class="text">Quiet:like reading and painting.</div>
                      <div class="text">Active:love sports.</div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="about-img-box">
                    <div class="image">
                      <img src="../assets/images/aboutus/about.jpg" class="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- End About-Us -->
  </div>
</template>
<style scoped>
.line-vector {
    background: url('../assets/images/contact/contact-bg.png');
    -webkit-animation: slide 20s linear infinite;
    -moz-animation: slide 20s linear infinite;
    animation: slide 20s linear infinite;
    height: 100%;
}
@keyframes slide {
    from {
        background-position: 0 0;
    }

    to {
        background-position: -400px 0;
    }
}
section {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100%)!important;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #f1f3f6;
    padding: 60px;
}
.about-img-box {
    margin-top: 30px;
}
.about-img-box .image {
    padding: 15px;
    background: #fff;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    -moz-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1)
}
.about-text-block {
    margin-top: 30px;
}
.about-content h4 {
    font-size: 32px;
    font-weight: 600;
    color: #212529;
}
.about-content .text {
    font-size: 14px;
    line-height: 25px;
    /* margin-top: 20px; */
    color: #212529;
}
.col-md-6{
    margin: 0;
}
.section_title{
    color: #212529;
}
.section_title h2 {
    position: relative;
    margin-bottom: 25px;
}
.section_title h2::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: 70px;
    width: 70px;
    background: url('../assets/images/title-decoration.png') no-repeat;
    background-size: 70px;
    z-index: 0;
}

</style>