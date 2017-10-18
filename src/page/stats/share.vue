<template>
  <div class="">
   share
  </div>
</template>

<script>
  export default {
    name: 'share',
    data () {
      return {
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 1
          this.spanRight = 23
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      }
    }
  }
</script>

