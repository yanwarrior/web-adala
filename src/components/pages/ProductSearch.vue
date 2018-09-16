<template>
  <div>
    <a-row>
      <a-col :span="16">
        <a href="#">filter</a>
      </a-col>
    </a-row> 

    <a-divider orientation="left">Search result "{{q}}"</a-divider>

    <a-row>
      <a-col :span="5" style="padding-right: 10px;" v-for="product in products" :key="product.slug">
        <a-card hoverable style="width: 100%">
          <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover"/>
          <template class="ant-card-actions" slot="actions">
            Contact Supplier
          </template>
          <a-card-meta>
            <div slot="title" id="productname">{{ product.name }}</div>
            <div slot="description">
              US $ {{product.start_price}}-{{product.end_price}} <br> 
              {{ product.moq }} <br>
              <a-icon type="shop" /> {{ product.company.name }}
            </div>
          </a-card-meta>
          </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'ProductSearch',
  data() {
    return {
      q: ''
    }
  },

  methods: {
    getProducts() {
      this.q = this.$route.query.q
      this.$store.dispatch('product/searchProducts', {q: this.q})
    },
    redirectIfQNull() {
      if (this.$route.query.q === "" || this.$route.query.q === undefined) {
        this.$router.push('/')
      }
    }
  },

  watch: {
    '$route'(to, from) {
      this.redirectIfQNull()
      this.getProducts()
    }
  },

  computed: {
    products() {
      return this.$store.getters["product/getProducts"]
    }
  },

  mounted() {
    this.redirectIfQNull()
    this.getProducts()
  }
}
</script>


<style scoped>
#productname {
  word-break: break-all;
}
</style>
