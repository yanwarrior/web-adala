<template>
  <a-tree
    showLine
    @expand="onExpand"
    @select="onSelect"
    :treeNodes="categories"
  />
</template>

<script>

export default {
  name: 'MenucategoryPartial',
  data () {
    return {
      autoExpandParent: true,
      selectedKeys: []
    }
  },
  methods: {
    onExpand (expandedKeys) {
      console.log('onExpand', arguments)
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },

    onCheck (checkedKeys) {
      console.log('onCheck', checkedKeys)
      this.checkedKeys = checkedKeys
    },

    onSelect (selectedKeys, info) {
      console.log('onSelect', selectedKeys)
      this.selectedKeys = selectedKeys
    },
  },

  watch: {
    checkedKeys(val) {
      console.log('onCheck', val)
    }
  },

  computed: {
    categories() {
      return this.$store.getters["category/getCategories"]
    }
  },

  mounted() {
    this.$store.dispatch('category/initCategories')
  }
}
</script>
