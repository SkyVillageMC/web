<template>
  <div class="m-0 p-0 flex flex-col min-h-screen">
    <Navbar />
    <Nuxt class="flex-grow"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "default",
});
</script>
