<template>
  
  <nav>

    <div class="img-logo2">
<img class="logo" src="/src/images/logo2.png" alt="logo" width="140" />
  </div>
    <div class="img-logo1">
<img class="logo" src="/src/images/logo1.png" alt="logo" width="400" />

  </div>


    <div class="buttons">
      <div class="button1">
        <button type="submit" @click="$router.push('/signUp')">Sign Up</button>
      </div>
      <div class="button2">
        <button type="submit" @click="$router.push('/signIn')">Sign In</button>
      </div>
      <div class="button3">
        <button type="submit" @click="$router.push('/signOut')">Log Out</button>
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
  padding: 0px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background-color: rgb(218, 236, 118);
}


.buttons {
  display: flex;
  flex-direction: column;
}


.button1 button{
  margin:10px;
width: 150px;
padding: 7px;
font-size: 12px;
font-weight:  bolder;
border-radius: 8px;
background-color: rgb(134, 164, 164);
cursor: pointer;
}
.button2 button{
  margin:10px;
width: 150px;
padding: 7px;
font-size: 12px;
font-weight:  bolder;
border-radius: 8px;
background-color: rgb(58, 165, 165);
cursor: pointer;
}

.button3 button{
  margin:10px;
width: 150px;
padding: 7px;
font-size: 12px;
font-weight:  bolder;
border-radius: 8px;

background-color: rgb(34, 130, 130);
cursor: pointer;
}
</style>
