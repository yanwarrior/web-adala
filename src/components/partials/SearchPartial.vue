<template>
  <div>
    <a-input-search @search="search" placeholder="input search text" />
  </div>
</template>

<script>
export default {
  name: 'SearchPartial',
  data() {
    return {
      q: ''
    }
  },
  methods: {
    search(value, event) {
      if (value === '') {
        this.$router.push('/')
      } else {
        // this.q = value
        // this.$store.dispatch('product/searchProducts', {q: this.q})
        this.$router.push(`/search?q=${value}`)
      }
    }
  }
}
</script>

