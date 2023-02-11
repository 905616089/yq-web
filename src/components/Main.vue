<template>
  <div class="site-container">
    <main class="clearfix">
      <div class="container-left" ref="leftContainer">
        <header class="header-container">
          <img src="../assets/headImg.jpg" class="headerImg">
          <span class="headerFont">外星-pa</span>
        </header>
        <nav>
          <el-row class="tac">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                
                <el-menu-item v-for="item in menuEnum" :key="item.key" :index="item.key">
                  <span slot="title" class="title" @click="clickEnum(item.url)">{{ item.name }}</span>
                </el-menu-item>
            </el-menu>
          </el-row>
        </nav>
        <footer class="footer-content">
            <ul class="footer-ul">
              <li class="footer-li">联系我</li>
              <li class="footer-li">邮箱：1137851024@qq.com</li>
              <li class="footer-li">微信：wxid_lysnaula4ynr21</li>
              <li class="footer-li">电话：13503591637</li>
            </ul>
          </footer>
      </div>
      <div class="container-right">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      height: '',
      menuEnum: [
        {name: 'Books', url: '/main/Books', key: '1'},
        {name: 'Illustration', url: '/main/Illustration', key: '2'},
        {name: 'Personal Work', url: '/main/Personal', key: '3'},
      ]
    }
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 20;
    console.log(this.height);
    this.setLeftHeight();
  },
  methods: {
    setLeftHeight() {
      this.$nextTick(() => {
        this.$refs.leftContainer.style.height = this.height + 'px';
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickEnum(url) {
      this.$router.push({
        path: url
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-container{
  width: 100%;
  position: relative;
  padding: 0px  0px 0px 65px;
  box-sizing: border-box;
}
.container-left{
  float: left;
  width: 268px;
  position: relative;
}
.container-right{
  float: left;
  width: calc(100% - 268px);
}
.header-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
main{
  margin-top: 20px;
}
.headerImg{
  width: 150px;
  max-width:205px;
  margin-bottom: 10px;
}
.headerFont{
  font-size: 14px;
  font-weight: 600;
}
nav .title {
  font-weight: 600;
  font-style: normal;
  text-transform: none;
  letter-spacing: .1em;
  line-height: 1.6em;
  font-size: 18px;
  display: block;
  padding: 0.2em;
  text-align: left;
}
>>>.el-menu-item.is-active{
  color: #fa8647 !important;
}
>>>.el-menu-item:focus, .el-menu-item:hover {
  background-color:  white;
  color: #409EFF;
}
>>>.el-menu{
  border: none;
}
.footer-content{
  position: absolute;
  bottom: 50px;
}
.footer-ul {

}
.footer-li{
  font-style: normal;
  text-transform: none;
  letter-spacing: .1em;
  line-height: 1.6em;
  font-size: 14px;
  display: block;
  padding: 0.2em;
  text-align: left;
  opacity: .9;
}
</style>
