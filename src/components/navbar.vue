<template>
  <nav>
    <div class="emoji-and-logo">
      <div>
        <li
          class="nav-item"
          @mouseover="homeLink = !homelink"
          @mouseleave="homeLink = false"
        >
          <img
            v-if="homeLink"
            class="logo-emoji"
            src="/src/images/logo-christmas.png"
            alt="logo"
          />
          <img
            v-else
            class="logo-emoji"
            src="/src/images/logo-christmas-2.jpeg"
            alt="logo2"
          />
        </li>
        <!--
        <img
          class="logo-emoji"
          src="/src/images/logo-christmas.png"
          alt="logo"
        />
        -->
      </div>
      <div>
        <img class="logo-img-main" src="/src/images/logo1.png" alt="logo" />
      </div>
    </div>

    <div class="buttons">
      <div class="button1">
        <button type="submit" @click="$router.push('/signUp')">
          Registrarse
        </button>
      </div>
      <div class="button2">
        <button type="submit" @click="$router.push('/signIn')">
          Iniciar sesión
        </button>
      </div>
      <div class="button3">
        <button type="submit" @click="$router.push('/')">Salir</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      homeLink: false,
    };
  },
};
</script>

<style scoped>
nav {
  height: 100px;
  margin-right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(186, 219, 197);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
}

.nav-item {
  list-style: none;
}
.emoji-and-logo {
  display: flex;
  align-items: center;
  margin-left: 70px;
}
.logo-emoji {
  width: 100px;
  margin-left: 20px;
}
.logo-img-main {
  width: 280px;
  margin-left: 200px;
}
.buttons {
  display: flex;
  flex-direction: row;
  margin-right: 30px;
}
.button1 button {
  margin: 8px;
  width: 100px;
  padding: 5px;
  font-size: 11px;
  font-weight: bolder;
  border-radius: 10px;
  background-color: rgb(83, 186, 186);
  cursor: pointer;
}
.button2 button {
  margin: 8px;
  width: 100px;
  padding: 5px;
  font-size: 11px;
  font-weight: bolder;
  border-radius: 10px;
  background-color: rgb(64, 170, 170);
  cursor: pointer;
}
.button3 button {
  margin: 8px;
  width: 70px;
  padding: 5px;
  font-size: 11px;
  font-weight: bolder;
  border-radius: 10px;
  background-color: rgb(49, 151, 151);
  cursor: pointer;
}

@media (max-width: 1000px) {
  nav {
    height: 60px;
    align-items: center;
    margin-right: 10px;
  }
  .emoji-and-logo {
    margin-left: 20px;
  }
  .logo-emoji {
    margin-left: 20px;
    width: 60px;
    margin-top: 5px;
  }
  .logo-img-main {
    margin-left: 10px;
    width: 125px;
  }
  .button1 button {
    margin: 0px 7px;
    width: 70px;
    padding: 5px;
    font-size: 9px;
    font-weight: bolder;
    border-radius: 4px;
  }
  .button2 button {
    margin: 0px 7px;
    width: 80px;
    padding: 5px;
    font-size: 9px;
    font-weight: bolder;
    border-radius: 4px;
  }
  .button3 button {
    margin: 0px 7px;
    width: 50px;
    padding: 5px;
    font-size: 9px;
    font-weight: bolder;
    border-radius: 4px;
  }
  .buttons {
    margin-bottom: 8px;
  }
}
</style>
