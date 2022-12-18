<template>
  <body>
    <!--  <div >
        Soy la initialPage
    </div>
-->
    <div class="container"> </div>
    
      <!--
    </div>
<img class="logo" src="/src/images/initial-img.png" alt="maind-img" />
<div>
    --><div>
      <h1>Administra tus tareas con Rememer it.</h1>
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
  background-color: rgb(206, 186, 224);
  border-radius: 30px;
  height: 30px;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container {
  width: 650px;
  height: 380px;
  /*border: solid gray;*/
  background-image: url("/src/images/initial-img.png");
  background-size: cover;
  background-position: center;
}


h1 {
  width: 400px;
  font-size: 38px;
}
h2 {
  width: 400px;
  font-size: 26px;
}

@media (max-width: 667px) {

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
  width: 300px;
  height: 1500px;
  /*border: solid gray;*/
  background-image: url("/src/images/initial-img.png");
  background-size: cover;
  background-position: center;
}
h1 {
  width: 200px;
  font-size: 25px;
}
h2 {
  width: 200px;
  font-size: 18px;
}

}

</style>
