<template>
  <div>
    <a-layout-header>
      <div class="drawer">
        <a-button value="small" @click="showDrawer" icon="menu-fold"></a-button>
      </div>

      <div class="logo"></div>
    </a-layout-header>

    <a-drawer placement="left" :closable="false" width=400  @close="onClose" :visible="visible">
      <span slot="title">Navigation</span>

      <strong>Categories / <a href="">more</a></strong>
      <menucategory-partial></menucategory-partial>
      
    </a-drawer>

  </div>
</template>

<script>
import MenucategoryPartial from '@/components/partials/MenucategoryPartial'


export default {
  name: 'HeadertopPartial',
  components: {
    'menucategory-partial': MenucategoryPartial
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 24px 16px 0;
  float: left;
}

#components-layout-demo-top .drawer {
  /* background: rgba(255,255,255,.2); */
  
  margin: 0px 20px 0px 0px;
  float: left;
}

#components-layout-demo-top .drawer button {
  /* background: rgba(255,255,255,.2); */
  border: none;
  font-size: 150%;
  background: #001529;
  color: aliceblue;
}
</style>


