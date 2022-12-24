<template>
    <div class="flex flex-col p-2">
    <spacer />
    <h1 class="text-center font-bold text-4xl md:text-5xl mb-16">
      E-Mail cím megerősítése.
    </h1>

    <div
      class="
        p-6
        rounded-xl
        border-2 border-base-300
        mx-auto
        bg-base-200
        shadow-lg
        w-96
      "
    >
      <p class="text-justify">
        Küldtünk egy email-t a(z) {{$route.query.email}} e-mail-címre. Kattints a benne lévő linkre a megerősítéshez!
      </p>
    </div>
    <spacer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
        loading: false,
        error: ``
    }),
    async mounted() {
        if (this.$route.query.code == null) return;
        try {
            await this.$axios.post(`/api/auth/confirm-email`, {
                email: this.$route.query.email,
                code: this.$route.query.code
            })
        } catch (e) {
            this.error = "Lejárt vagy hibás megerősítő kód."
        }
    }
})
</script>
