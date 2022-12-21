<template>
  <nav>
    <div class="emoji-and-logo">
      <div>
      <img class="logo-emoji" src="/src/images/logo-christmas.png" alt="logo" />
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
    return {};
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
.emoji-and-logo{
    display: flex;
align-items: center;
  }
.logo-emoji {
  width: 100px;
  margin-left: 130px;
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
  background-color: rgb(134, 164, 164);
  cursor: pointer;
}
.button2 button {
  margin: 8px;
  width: 100px;
  padding: 5px;
  font-size: 11px;
  font-weight: bolder;
  border-radius: 10px;
  background-color: rgb(58, 165, 165);
  cursor: pointer;
}

.button3 button {
  margin: 8px;
  width: 70px;
  padding: 5px;
  font-size: 11px;
  font-weight: bolder;
  border-radius: 10px;
  background-color: rgb(34, 130, 130);
  cursor: pointer;
}

@media (max-width: 1015px) {

  .emoji-and-logo{
    display: flex;
align-items: center;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 110px;
  }
  .logo-emoji {
    margin: 0px 0px;
    width: 70px;
    margin-top: 5px;

  }
  .logo-img-main {
    margin: 0px 0px;
    width: 200px;

  }
  .button1 button {
    margin: 0px 7px;
    width: 80px;
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
    width: 80px;
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
