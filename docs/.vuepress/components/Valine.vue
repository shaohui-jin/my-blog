<template>
  <div id="valine"></div>
</template>

<script>
  export default {
    name: 'Valine',
    data() {
      return {
        valine: ''
      }
    },
    mounted() {
      import('valine').then(res => {
        this.valine = res.default
      })
    },
    beforeDestroy() {

    }
  }
</script>
<style scoped>

</style>