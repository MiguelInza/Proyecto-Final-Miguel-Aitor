<template>
<div class="signout">
  Sign Out
</div>
</template>

<script>
import { mapStores } from 'pinia'
import userStore from '../stores/user'

export default {
    data() {
      return {

      }
    },
methods: {

},
computed: {
    ...mapStores (userStore),
}
}
</script>

<style scoped>
.signout {
  height: 600px;
  background-color: bisque;
}
</style>
