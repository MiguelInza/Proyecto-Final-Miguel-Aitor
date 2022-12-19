<template>
<div class="signout">
  <form @submit.prevent="signOut">
      <button class="button-sign-in" type="submit">Sign Out!</button>
    </form>
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
  signOut () {
        this.userStore.signOut();
        

      }

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
