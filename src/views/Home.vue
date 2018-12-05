<template>
  <div class="home">
    <Burger />
  </div>
</template>

<script>
// @ is an alias to /src
import Burger from '@/components/Burger.vue'

export default {
  name: 'home',
  components: {
    Burger
  },
  data: () => {
    return {
      msg: "HOME"
    }
  }
}
</script>

<style>

</style>
