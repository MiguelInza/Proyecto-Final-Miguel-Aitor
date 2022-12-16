<template>
  <div class="signin">
    <form @submit.prevent="signIn">
      <input type="email" v-model="emailin" placeholder="Email" />
      <input type="password" v-model="passwordin" placeholder="Password" />
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
        this.userStore.signIn(this.emailin, this.passwordin);
        
        //alert("Email or Password not found");
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
  margin-top: 10px;
  padding: 10px;
  height: 600px;
  background-color: bisque;
}
.button-sign-in {
  margin: 0 10px;
  padding: 0 9px;
}
</style>
