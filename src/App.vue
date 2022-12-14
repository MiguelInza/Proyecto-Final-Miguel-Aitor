<template>
  <div>
    <navbar />
  </div>
  <RouterView />
  <div>
    <foter />
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import foter from "./components/foter.vue";

export default {
  components: {
    navbar,
    foter,
  },
};
</script>
