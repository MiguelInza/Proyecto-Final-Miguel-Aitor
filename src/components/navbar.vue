<template>
  Soy la navbar
  <div class="buttons">
    <div class="button1">
      <button type="submit" @click="$router.push('/signUp')">Sign Up</button>
    </div>
    <div class="button2">
      <button type="submit" @click="$router.push('/signIn')">Sign In</button>
    </div>
  </div>
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
.buttons {

}

.button1 {
  display: flex;
  justify-content: flex-end;
  margin:15px;
  
}
.button2 {
  display: flex;
  justify-content: flex-end;
  margin:15px;
  
}

.button1 button{
width: 200px;
padding: 10px;
border-radius: 8px;
background-color: aqua;

}

.button2 button{
width: 200px;
padding: 10px;
border-radius: 8px;

}

</style>
