<template>

        <div class="signin">
    <form @submit.prevent="signIn">
    <input type="text" v-model="emailin" placeholder="Email">
    <input type="text" v-model="passwordin" placeholder="Password">
    <button class="button-sign-in" type="submit">Sign In!</button>    
    </form>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.signin {
    display: flex;
   
    justify-content: right;
    margin-top: 20px;
    padding-right: 30px;
}

.button-sign-in {
    margin: 0 10px;
    padding: 0 9px;
}

</style>