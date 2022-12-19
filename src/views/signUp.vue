<template>
  <body>
    <form @submit.prevent="signUp">
      <label> Email</label>
      <div class="email-line">
        <input type="email" v-model="emailup" placeholder="Email" required id="hole-email"/>
      </div>
      <label>Password</label>
      <div class="password-line">
        <input type="password" class="sin borde" v-model="passwordup" placeholder="Password" id="hole-password"/>
      </div>
<div class="btn-create-account">
      <button class="create-account" type="submit">CREAR CUENTA</button>
    </div>
    </form>
<div class="text-already-account">
  <div>
    <p>
      ¿Ya estás registrado?
    </p>
    </div>
    <div >
    
      <button class="signIn-btn" type="submit" @click="$router.push('/signIn')">Inicia sesión</button>
  
  </div>
  </div>
  </body>
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
body {
  margin-top: 10px;

  height: 400px;
  background-color: rgb(185, 130, 233);
  margin-top: 10px;
  border-radius: 30px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn-create-account {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.email-line {
  margin-bottom: 20px;
  font-size: 15px;

}
#hole-email {
  margin-top: 8px;
  border: none;
  padding-left: 16px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 300px;
  background-color: rgb(228, 235, 240);
  border-radius: 10px;
}

.password-line {
  margin-bottom: 30px;
  font-size: 15px;

}
#hole-password {
  margin-top: 8px;
  border: none;
  padding-left: 16px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 300px;
  background-color: rgb(228, 235, 240);
  border-radius: 10px;
}
.create-account {
  margin-top: 30px;
  font-size: 17px;
  font-family: "Trebuchet MS", Verdana, sans-serif;
  font-weight: bold;
  padding: 10px 35px;
  border-radius: 20px;
  background-color: rgb(40, 203, 89);
  cursor: pointer;
}
.text-already-account{
  margin-top: 10px;
font-size: 16px;
width: 280px;
display: flex;
justify-content: space-around;
align-items: center;

}
.signIn-btn {
  padding: 3px 14px;
  background-color: rgb(167, 93, 231);
  border-radius: 12px;
  cursor: pointer;
}

</style>
