<template>
  <div>
    <!-- Start Contact -->
    <section class="section line-vector" id="contact">
      <div class="section-area">
        <div class="section-content">
          <div class="container">
            <div class="title-block mx-auto">
              <div class="section_title mb-4 text-center">
                <h2><span>Contact</span></h2>
              </div>
            </div>
            <div>
              <p class="notice">正在开发中，敬请期待...</p>
            </div>
            <div class="row align-items-center">
              <div class="col-md-6 order-2 order-md-1">
                <div class="p-4 contact-box rounded form-box">
                  <h4 class="m-0">Get In Touch !</h4>
                  <div class="custom-form">
                    <div id="message"></div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group position-relative">
                            <p>Your Name
                              <span class="text-danger">*</span>
                            </p>
                            <i class="mdi mdi-account ml-3 icons"></i>
                            <input name="name" type="text" v-model="name" class="form-control pl-5" placeholder="First Name :" required/>
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-md-6">
                          <div class="form-group position-relative">
                            <p>Your Email
                              <span class="text-danger">*</span>
                            </p>
                            <i class="mdi mdi-email ml-3 icons"></i>
                            <input v-model="email" name="email"   class="form-control pl-5"  placeholder="Your email :" required />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-md-12">
                          <div class="form-group position-relative">
                            <p>Subject</p>
                            <i class="mdi mdi-book ml-3 icons"></i>
                            <input v-model="subject" name="subject" id="subject" type="text" class="form-control pl-5"  placeholder="Subject" />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-md-12">
                          <div class="form-group position-relative">
                            <p>Comments</p>
                            <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                            <textarea v-model="comments" name="comments" id="comments" rows="4" class="form-control pl-5" placeholder="Your Message :"></textarea>
                          </div>
                        </div>
                      </div>
                      <!--end row-->
                      <div class="row">
                        <div class="col-sm-12 text-center">
                          <button  @click="sendContact" class="btn btn-hover send-btn btn-block">send Message</button>
                          <div id="simple-msg"></div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 order-1 order-md-2">
                <div class="contact-img">
                  <img src="../assets/images/contact/contact-vector.png" class="img-fluid" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:'',
      email:'',
      subject:'',
      comments:''
    }
  },
  methods: {
    sendContact(){
      this.$http.post("/contact/post",{
          name:this.name,
          email:this.email,
          subject:this.subject,
          comments:this.comments,
        
      }).then(res=>{
        console.log(res);
      }).catch((err) => {
          console.log(err);
        });
    }
  },
}
</script>
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
  background-color: #9ec3fc !important;
  padding-left: 80px;
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
.section_title h2 {
  position: relative;
  margin-bottom: 25px;
}
.col-md-6{
  color: #212529;
}
.section_title{
  margin-top: 50px;
}

.section_title h2{
  color: #212529;
}
.section_title h2 span {
  font-size: 40px;
  font-weight: 600;
}
.contact_form {
  padding: 30px;
  background: #fff;
  border-radius: 30px;
}
.contact-box {
  box-shadow: 3px 3px 3px #dfdfdf, -3px -3px 3px #fafafa;
}

.form-group .icons {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 100px;
  font-size: 18px;
}
.form-control {
  padding: 7px 20px;
  height: 40px;
  font-size: 14px;
  font-weight: 300;
  box-shadow: inset 3px 3px 3px #dadada, inset -3px -3px 3px #fafafa;
  border: none;
  background: #f1f3f6;
}
.form-control:focus {
  box-shadow: inset 3px 3px 3px #dadada, inset -3px -3px 3px #fafafa;
  border: none;
   background: #f1f3f6;
}
.form-group label {
  font-size: 14px;
  font-weight: 400;
}

.custom-form .form-group {
  margin: 20px 0 0;
}

.send-btn {
  margin-top: 30px;
  background: #FF9E2B;
  box-shadow: inset 3px 3px 3px #d77807, inset -3px -3px 3px #FF9E2B;
}
.send-btn:hover {
  color: #fff;
}
.col-md-12{
  margin-top: 0;
}
.align-items-center{
margin: 50px;
}
.notice{
  color: #212529;
}

</style>