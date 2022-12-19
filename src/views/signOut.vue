<template>
  <body>
<div class="btn-signout">
  <form @submit.prevent="signOut">
      <button class="button-sign-in" type="submit">Initial page</button>
    </form>
</div>
<div>


</div>
</body>
</template>

<script>
import { mapStores } from 'pinia'
import userStore from '../stores/user'

export default {
    data() {
      return {

      }
    },
methods: {
  signOut () {
        this.userStore.signOut();
        

      }

},
computed: {
    ...mapStores (userStore),
}
}
</script>

<style scoped>
body {
  margin-top: 10px;

height: 400px;
background-color: rgb(177, 173, 236);
margin-top: 10px;
border-radius: 30px;
font-size: 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.logo-img-end{
width: 600px
}

</style>
