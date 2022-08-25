<template>
  <div
    class="
      bg-white
      rounded-lg
      max-w-[16rem]
      h-xl
      flex flex-col
      m-2
      p-4
      shadow-lg
      hover:shadow-xl hover:-translate-y-2
      transition-all
    "
  >
    <slot></slot>

    <h1 class="text-black text-2xl font-bold text-center mb-2">{{ title }}</h1>
    <p class="text-gray-800 text-justify">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: `FeatureCard`,
  props: {
    title: String,
    description: String,
  },
});
</script>
