<template>
    <div id="iniPage">
        Soy la initialPage
    </div>
</template>

<script>
import { mapStores } from 'pinia'
import userStore from '../stores/user'

export default {
    data() {
      return {
    }
    },
    computed: {
        ...mapStores (userStore),
    }
}
</script>

<style scoped>
#iniPage {
    background-color: rgb(208, 193, 222);
    height: 600px;
}

</style>