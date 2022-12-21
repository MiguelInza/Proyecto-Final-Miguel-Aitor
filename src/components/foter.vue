<template>

  <footer>
    <div>
<img class="logo-principal" src="/src/images/logo1.png" alt="logo" width="110" />
  </div>
  <div id="text-footer">
  Síguenos por las redes:
  </div>
  <div id="logos-redes">
  <img class="logo" src="/src/images/logo-fb.png" alt="logo" />
  <img class="logo" src="/src/images/logo-tweet.png" alt="logo"  />
  <img class="logo" src="/src/images/logo-linked.png" alt="logo"  />
  <img class="logo" src="/src/images/logo-yout.png" alt="logo"  />
  <img class="logo" src="/src/images/logo-insta.png" alt="logo"  />
</div>
</footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
footer {
 height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:rgb(186, 219, 197);
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
}

#text-footer {
  font-size: 15px;
  font-family: "Trebuchet MS", Verdana, sans-serif;
  font-weight: bold;
}

.logo{
  width: 22px;
  height: 22px;
}
#logos-redes {
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  object-fit: cover;

}

@media (max-width: 1000px) {
  #text-footer {
  font-size: 14px;
 
  
}

}
@media (max-width: 700px) {

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-principal {
width: 120px;
margin-bottom: 10px;
}
.logo{
  margin-top: 10px;
  width: 22px;
  height: 22px;
}
#text-footer {
  font-size: 14px;
  margin-bottom: 8px;
 
  
}

#logos-redes {
  width: 300px;

}
}

</style>
