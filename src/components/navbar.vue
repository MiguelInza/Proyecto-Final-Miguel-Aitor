<template>
  <nav>
    <div class="emoji-and-logo">

      <div>
        <button class="btn-music" @click.prevent="audio.isPlaying ? pause(audio) : play(audio)" v-for="audio in audios" :key="audio.id" >
    {{ audio.isPlaying ? 'Pause' : 'Play' }} {{ audio.name }}
  </button>
      </div>

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
            src="/src/images/campanaIzquierda.png"
            alt="logo2"
          />
        </li>
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
      audios: [{
      isPlaying: false,
      file: new Audio('/src/images/Wham - Last Christmas.mp3'),
      id: 'muscle-car',
      name: 'Last Christmas',
      }],
    };
  },
  methods: {
    play(audio) {
      audio.isPlaying = true;
      audio.file.play();
    },
    pause(audio) {
      audio.isPlaying = false;
      audio.file.pause();
    },
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
.btn-music {

  margin: 4px;
  background-color: rgb(216, 66, 6);
  color: white;
  padding: 5px 10px;
  border-radius: 14px;
  font-size: 12px;
  cursor: pointer;
}
.btn-music:hover {
  background-color: white;
  color: rgb(216, 66, 6);
transition: 0.4s;
font-weight: bold;
border-radius: 8px;

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
.button1 button:hover {
  margin: 10px;
  width: 140px;
  padding: 7px;
  font-size: 13px;

  border-radius: 12px;
  transition: 0.5s;
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
.button2 button:hover {
  margin: 10px;
  width: 140px;
  padding: 7px;
  font-size: 13px;

  border-radius: 12px;
  transition: 0.5s;
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
.button3 button:hover {
  margin: 10px;
  width: 90px;
  padding: 7px;
  font-size: 13px;

  border-radius: 12px;
  transition: 0.5s;
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
    border-radius: 10px;
  }
  .button1 button:hover {
    margin: 0px 9px;
    width: 73px;
    padding: 6px;
    font-size: 10px;
    border-radius: 4px;
    transition: 0.5s;
  }
  .button2 button {
    margin: 0px 7px;
    width: 80px;
    padding: 5px;
    font-size: 9px;
    font-weight: bolder;
    border-radius: 10px;
  }
  .button2 button:hover {
    margin: 0px 9px;
    width: 90px;
    padding: 6px;
    font-size: 10px;
    border-radius: 4px;
    transition: 0.5s;
  }

  .button3 button {
    margin: 0px 7px;
    width: 50px;
    padding: 5px;
    font-size: 9px;
    font-weight: bolder;
    border-radius: 4px;
  }
  .button3 button:hover {
    margin: 0px 9px;
    width: 65px;
    padding: 6px;
    font-size: 10px;
    border-radius: 4px;
    transition: 0.5s;
  }
  .buttons {
    margin-bottom: 8px;
  }
}
</style>
