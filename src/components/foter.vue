<template>

  <footer>
    <div class="img-logo1">
<img class="logo" src="/src/images/logo1.png" alt="logo" width="150" />
  </div>
  <div id="text-footer">
  Siguenos:
  </div>
  <div class="logos-redes">
  <img class="logo" src="/src/images/logo-fb.png" alt="logo" width="28" />
  <img class="logo" src="/src/images/logo-tweet.png" alt="logo" width="40" />
  <img class="logo" src="/src/images/logo-linked.png" alt="logo" width="40" />
  <img class="logo" src="/src/images/logo-yout.png" alt="logo" width="40" />
  <img class="logo" src="/src/images/logo-insta.png" alt="logo" width="40" />
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
  padding: 0px 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  background-color: rgb(192, 211, 83);
  margin-top: 10px;
  padding: 20px;
}

#text-footer {
  font-size: 20px;
}
.logos-redes {
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media (max-width: 667px) {

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
}

</style>
