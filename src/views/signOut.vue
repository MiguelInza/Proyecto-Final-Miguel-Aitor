<template>

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

},
computed: {
    ...mapStores (userStore),
}
}
</script>

<style scoped>

</style>
