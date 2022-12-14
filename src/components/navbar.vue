<template>
  <div id="navbar">
    Soy la navbar
    <div class="buttons">
      <div class="button1">
        <button type="submit" @click="$router.push('/signUp')">Sign Up</button>
      </div>
      <div class="button2">
        <button type="submit" @click="$router.push('/signIn')">Sign In</button>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#navbar {
  background-color: rgb(238, 235, 231);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.buttons {
  display: flex;
  flex-direction: column;
}
.button1 {
  margin:15px;
}
.button2 {
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
background-color: rgb(40, 168, 168);
}
</style>
