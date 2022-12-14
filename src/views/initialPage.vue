<template>
WELCOME!!!
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
.buttons {
    display: flex;
    flex-direction: column;
}

</style>