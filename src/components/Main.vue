<template>
  <div class="site-container">
    <main class="clearfix">
      <div class="container-left" ref="leftContainer">
        <header class="header-container">
          <img src="../assets/headImg.jpg" class="headerImg">
          <span class="headerFont">YANGQIAN</span>
        </header>
        <nav>
          <el-row class="tac">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <div v-for="item in menuEnum" :key="item.key">
                  <el-submenu :index="item.key" v-if="item.children">
                    <template slot="title"  ><span @click="clickEnum(item.url)" class="title">{{ item.name }}</span></template>
                    <el-menu-item-group v-if="item.children">
                      <el-menu-item :index="items.key" v-for="items in item.children" :key="items.key" @click="clickEnum(items.url)" class="title">{{ items.name }}</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item :index="item.key" v-else>
                    <template slot="title"><span @click="clickEnum(item.url)"  class="title" >{{ item.name }}</span></template>
                  </el-menu-item>
                </div>
            </el-menu>
          </el-row>
        </nav>
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
        {name: 'Books', url: '/main/Books', key: '1', children: [
          {name: '书本一', url: '/main/Books', key:'1-1'}
        ]},
        {name: 'Illustration', url: '/main/Illustration', key: '2'},
        {name: 'Personal Work', url: '/main/Personal', key: '3'},
        {name: 'About', url: '/main/About', key: '4'},

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
      if(this.$route.path === url) {
        return false;
      }
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
  width: 125px;
  max-width:205px;
  margin-bottom: 10px;
}
.headerFont{
  font-size: 20px;
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
>>>.el-submenu__title:hover{
  background-color:  white;
  color: #409EFF;
}
>>>.el-menu-item-group__title{
  padding: 0px !important;
}
>>>.el-menu-item:focus, .el-menu-item:hover {
  background-color:  white;
  color: #409EFF;
}
>>>.el-menu{
  border: none;
}
>>>.el-submenu__title > .el-icon-arrow-down {
  display: none;
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
