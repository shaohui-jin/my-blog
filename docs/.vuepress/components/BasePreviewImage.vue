<template>
  <div>
    <img :src="baseUrl"/>
  </div>
</template>
<script>
export default {
  name: "BasePreviewImage",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  // data() {
  //   return {
  //     baseUrl: ''
  //   }
  // },
  // watch: {
  //   url: {
  //     handler(newV) {
  //       console.log(newV)
  //       const env = import.meta.env
  //       console.log(env)
  //       const {DEV, BASE_URL} = env
  //       console.log(DEV ? '/' + newV : BASE_URL + newV)
  //       this.baseUrl = DEV ? '/' + newV : BASE_URL + newV
  //     },
  //     immediate: true
  //   }
  // },
  computed: {
    baseUrl() {
      console.log(this.url)
      const env = import.meta.env
      console.log(env)
      const {DEV, BASE_URL} = env
      console.log(DEV ? '/' + this.url : BASE_URL + this.url)
      return DEV ? '/' + this.url : BASE_URL + this.url
    }
  },
};
</script>

<style>

</style>
