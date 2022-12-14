<template>
    Soy la navbar
<div class="buttons">
  <button type="submit" @click="$router.push('/signUp')">Sign Up</button> 
  <button type="submit" @click="$router.push('/signIn')">Sign In</button>  
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
    computed: {
        ...mapStores (userStore),
    }
}
</script>

<style scoped>
.buttons {
    display: flex;
    flex-direction: column;
}

</style>