<template>
  <body>
    <h1>
      Registrarse
    </h1>
    <form @submit.prevent="signUp">
      <label class="text-line1"> Email</label>
      <div class="email-line">
        <input type="email" v-model="emailup" placeholder="Email" required id="hole-email"/>
      </div>
      <label class="text-line2">Password</label>
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
@import url(//db.onlinewebfonts.com/c/e6920cc7524bc3012ae9ad4179e060ee?family=Fantasy);

body {
  margin-top: 110px;

  height: 500px;
  background-color: rgb(185, 130, 233);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: Fantasy;
  font-size: 34px;
}
.text-line1 {
  font-size: 28px;

}
.text-line2 {
  font-size: 28px;
}
.btn-create-account {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.email-line {
  margin-bottom: 20px;
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

@media (max-width: 1000px) {

body {
  height: 550px;
    margin-top: 70px;

}
  .text-line1 {
  font-size: 24px;

}
.text-line2 {
  font-size: 24px;
}
.email-line {
  margin-bottom: 15px;

}

#hole-email {
  margin-top: 8px;
  border: none;
  padding-left: 12px;
  padding-bottom: 8px;
  padding-top: 8px;
  width: 240px;
  border-radius: 10px;
}

.password-line {
  margin-bottom: 15px;
  font-size: 10px;

}
#hole-password {
  margin-top: 8px;
  border: none;
  padding-left: 12px;
  padding-bottom: 8px;
  padding-top: 8px;
  width: 240px;
  border-radius: 10px;
}

.create-account {
  margin-top: 12px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 30px;
  border-radius: 17px;


}
}
</style>
