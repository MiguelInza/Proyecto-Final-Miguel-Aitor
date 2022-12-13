<template>
    <li>
      {{ title }}
      <button class="remove-button" @click="$emit('remove')">Remove</button>
    </li>
  </template>

  <script>
  export default {
    props: ['title'],
    emits: ['remove']
  }
  </script>

  <style scoped>
  .remove-button {
    margin-left: 10px;
  }

</style>