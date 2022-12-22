<template>
  <body>
    <div class="container"></div>
    <div>
      <img
        class="logo-initial-page"
        src="/src/images/initial-img.png"
        alt="maind-img"
      />
    </div>
    <div>
      <h1>Administra tus tareas con Remember it.</h1>
      <h2>
        La mejor forma de planificarte la semana con un click y sin esfuerzo.
      </h2>
    </div>
  </body>
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(userStore),
  },
};
</script>

<style scoped>


body {
  margin-top: 110px;
  background-color: rgb(161, 152, 231);
  border-radius: 30px;

  height: 510px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo-initial-page {
  width: 575px;
}

h1 {
  width: 440px;
  font-size: 38px;
  
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
  padding-left: 50px;
  padding-right: 50px;
}
h2 {
  width: 400px;
  font-size: 26px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}

@media (max-width: 1180px) {
  .logo-initial-page {
    width: 360px;
  }
  h1 {
    width: 440px;
    font-size: 34px;

    padding-left: 50px;
    padding-right: 50px;
  }
  h2 {
    width: 400px;
    font-size: 23px;
  }
}

@media (max-width: 1000px) {
  body {
    height: 550px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo-initial-page {
    width: 250px;
  }
  h1 {
    width: 200px;
    font-size: 25px;

    padding-left: 100px;
    padding-right: 100px;
  }
  h2 {
    width: 200px;
    font-size: 18px;
    padding-left: 100px;
    padding-right: 100px;
  }
}
</style>
