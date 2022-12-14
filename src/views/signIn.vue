<template>
  <div class="signin">
    <form @submit.prevent="signIn">
      <input type="text" v-model="emailin" placeholder="Email" />
      <input type="text" v-model="passwordin" placeholder="Password" />
      <button class="button-sign-in" type="submit">Sign In!</button>
    </form>
  </div>
</template>

<script>


import { mapStores } from 'pinia'
import userStore from '../stores/user'

export default {
    data() {
      return {
        passwordin: "", 
        emailin: "",
      }
    },

methods: {
    signIn () {
        this.userStore.signIn(this.emailin, this.passwordin)

      }
},
computed: {
        ...mapStores (userStore),
}
}
</script>

<style scoped>
.signin {
  display: flex;

  justify-content: right;
  margin-top: 20px;
  padding-right: 30px;
}

.button-sign-in {
  margin: 0 10px;
  padding: 0 9px;
}
</style>
