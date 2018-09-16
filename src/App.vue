<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <headertop-partial></headertop-partial>
    <br>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    
    <footer-partial></footer-partial>
  </a-layout>
</template>

<script>
import FooterPartial from '@/components/partials/FooterPartial'
import HeadertopPartial from '@/components/partials/HeadertopPartial'

export default {
  name: 'App',
  components: {
    'footer-partial': FooterPartial,
    'headertop-partial': HeadertopPartial
  },
  data() {
    return {
    
    }
  },
  
}
</script>

<style>

</style>
