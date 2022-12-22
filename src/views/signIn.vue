<template>
  <body>
   <h1>
    Iniciar sesión
   </h1>
    <form @submit.prevent="signIn">
      <label class="text-line1"> Email</label>
      <div class="email-line">
        <input
          type="email"
          v-model="emailin"
          placeholder="Email"
          required
          id="hole-email"
        />
      </div>
      <label class="text-line2">Password</label>
      <div class="password-line">
        <input
          type="password"
          class="sin borde"
          v-model="passwordin"
          placeholder="Password"
          id="hole-password"
        />
      </div>
      <div class="btn-create-account">
        <button class="create-account" type="submit">Iniciar sesión</button>
      </div>
    </form>
    <div class="text-already-account">
      <div>
        <p>¿No tienes tu cuenta?</p>
      </div>
      <div>
        <button
          class="signUp-btn"
          type="submit"
          @click="$router.push('/signUp')"
        >
          Regístrate
        </button>
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
      passwordin: "",
      emailin: "",
    };
  },
  methods: {
    signIn() {
      this.userStore.signIn(this.emailin, this.passwordin);
    },
  },
  computed: {
    ...mapStores(userStore),
  },
};
</script>

<style scoped>
body {
  margin-top: 110px;
  height: 77vh;
  background-color: rgb(197, 154, 236);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 34px;

}
.text-line1 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 28px;

}
.text-line2 {
  font-size: 28px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
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
.create-account:hover {
  background-color: white;

color: rgb(167, 205, 205);
  background-color: rgb(55, 63, 216);
  transition: 0.6s;
}
.text-already-account {
  margin-top: 10px;
  font-size: 16px;
  width: 280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.signUp-btn {
  padding: 3px 14px;
  background-color: rgb(167, 93, 231);
  border-radius: 12px;
  cursor: pointer;
}
.signUp-btn:hover {
color: white;
transition: 0.5s;
}

@media (max-width: 1000px) {
  body {
    height: 82vh;
    margin-top: 70px;
    margin-bottom: 50px;
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
