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

      <div id="search">
        <strong>Seacrh / <a href="">clear</a></strong>
        <search-partial></search-partial>
      </div>
      
      <div id="categories">
        <strong>Categories / <a href="">more</a></strong>
        <menucategory-partial></menucategory-partial>
      </div>
      
    </a-drawer>

  </div>
</template>

<script>
import MenucategoryPartial from '@/components/partials/MenucategoryPartial'
import SearchPartial from '@/components/partials/SearchPartial'

export default {
  name: 'HeadertopPartial',
  components: {
    'menucategory-partial': MenucategoryPartial,
    'search-partial': SearchPartial
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

#search {
  margin-bottom: 10px; 
}

#search strong {
  margin-bottom: 5px;
  display: block;
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


