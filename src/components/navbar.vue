<template>
  
  <nav>

    <div>
<img class="logo-emoji" src="/src/images/logo2.png" alt="logo" />
  </div>
    <div>
<img class="logo-img-main" src="/src/images/logo1.png" alt="logo"  />

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
  background-color:rgb(186, 219, 197);
}
.logo-emoji {
  width: 120px;
}
.logo-img-main {
width: 400px
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

@media (max-width: 667px) {

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-emoji {
  width: 80px;

}
.logo-img-main {
width: 240px;
margin-bottom: 10px;
}
.button1 button{
  margin:7px;
width: 100px;
padding: 7px;
font-size: 10px;
font-weight:  bolder;
border-radius: 5px;

}
.button2 button{
  margin:7px;
width: 100px;
padding: 7px;
font-size: 10px;
font-weight:  bolder;
border-radius: 5px;
}

.button3 button{
  margin:7px;
width: 100px;
padding: 7px;
font-size: 10px;
font-weight:  bolder;
border-radius: 5px;
}
.buttons {
margin-bottom: 10px;
}

}
</style>
