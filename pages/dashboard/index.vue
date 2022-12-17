<template>
    <div class="p-2">
        <h1>Yes</h1>
        <p v-for="k, v in $auth.user" v-bind:key="k">{{v}}: {{k}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    middleware: "auth"
})
</script>
