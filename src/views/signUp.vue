<template>
  <div class="signup">
    <form @submit.prevent="signUp">
      <input type="email" v-model="emailup" placeholder="Email" />
      <input type="password" v-model="passwordup" placeholder="Password" />
      <button class="button-sign-up" type="submit">Sign Up!</button>
    </form>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";

export default {
  data() {
    return {
      passwordup: "",
      emailup: "",
    };
  },

  methods: {
    signUp() {
      this.userStore.signUp(this.emailup, this.passwordup);
      alert("Confirm your email address by clicking a link in your email");
    },
  },
  computed: {
    ...mapStores(userStore),
  },
};
</script>

<style scoped>
.signup {
  display: flex;
  justify-content: right;
  margin-top: 10px;
  padding: 10px;
}
.button-sign-up {
  margin: 0 10px;
}
</style>
