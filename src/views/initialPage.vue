<template>
  <body>
    <!--  <div >
        Soy la initialPage
    </div>
-->
<div class="container"> </div>
    
    
    <div>
<img class="logo-initial-page" src="/src/images/initial-img.png" alt="maind-img" />
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
  background-color: rgb(206, 186, 224);
  border-radius: 30px;
 
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo-initial-page {
  width: 500px;
}

h1 {
  width: 440px;
  font-size: 38px;

  padding-left: 50px;
  padding-right: 50px;
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
