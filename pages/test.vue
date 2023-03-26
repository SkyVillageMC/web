<script lang="ts" setup>
let state = reactive({
  counter: 1
})

function inc() {
  state.counter++;
}
</script>

<template>
  <div>
    <h1>Counter: {{state.counter}}</h1>
    <button @click="inc()">Increment</button>
  </div>
</template>
