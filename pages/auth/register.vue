<template>
  <div class="flex flex-col p-2">
    <spacer />
    <h1 class="text-center font-bold text-4xl md:text-5xl mb-16">
      Regisztráció
    </h1>

    <div
      class="
        p-6
        rounded-xl
        border-2 border-base-300
        mx-auto
        bg-base-200
        shadow-lg
        w-80
      "
    >
      <div class="form-control w-full max-w-xs">
        <input
          type="text"
          placeholder="Felhasználónév"
          class="input input-bordered w-full max-w-xs"
          v-model="username"
        />
        <label class="label">
          <span
            class="label-text-alt text-red-600"
            v-if="usernameError"
            :class="{ 'animate-shake': usernameError }"
            >Kötelező kitölteni</span
          >
        </label>
      </div>

      <div class="form-control w-full max-w-xs mt-2">
        <input
          type="email"
          placeholder="E-mail"
          class="input input-bordered w-full max-w-xs"
          v-model="email"
        />
        <label class="label">
          <span
            class="label-text-alt text-red-600"
            v-if="emailError"
            :class="{ 'animate-shake': emailError }"
            >Kötelező kitölteni</span
          >
        </label>
      </div>

      <div class="form-control w-full max-w-xs mt-2">
        <input
          type="password"
          placeholder="Jelszó"
          class="input input-bordered w-full max-w-xs"
          v-model="password"
        />
        <label class="label">
          <span
            class="label-text-alt text-red-600"
            v-if="passwordError"
            :class="{ 'animate-shake': passwordError }"
            >Kötelező kitölteni</span
          >
        </label>
      </div>

      <div class="form-control w-full max-w-xs mt-2">
        <input
          type="password"
          placeholder="Jelszó újra"
          class="input input-bordered w-full max-w-xs"
          v-model="passwordAgain"
        />
        <label class="label">
          <span
            class="label-text-alt text-red-600"
            v-if="passwordAgainError"
            :class="{ 'animate-shake': passwordAgainError }"
            >Kötelező kitölteni</span
          >
        </label>
      </div>

      <div class="form-control">
        <label class="label cursor-pointer">
          <input type="checkbox" checked="checked" class="checkbox" v-model="acceptedStuff" />
          <span class="label-text">Eladom a lelkemet is Bill Gécnek</span>
        </label>
      </div>

      <button class="btn btn-primary w-full mt-6" @click="register()" :class="{'btn-disabled' : !canRegister}" :disabled="!canRegister">Regisztráció</button>
    </div>
    <spacer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: `register`,
  data: () => ({
    username: ``,
    email: ``,
    password: ``,
    passwordAgain: ``,
    acceptedStuff: false,
  }),
  computed: {
    usernameError: function () {
      return !this.username.match(/^([A-z0-9_-]){3,15}$/g);
    },
    emailError: function () {
      return !this.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    },
    passwordError: function () {
      return !this.password.match(/^.{8,128}$/g);
    },
    passwordAgainError: function () {
      return !this.passwordAgain.match(/^.{8,128}$/g);
    },
    canRegister: function() {
      let uV = this.username.match(/^([A-z0-9_-]){3,15}$/g);
      let eV = this.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      let pV = this.password.match(/^.{8,128}$/g);
      let paV = this.passwordAgain.match(/^.{8,128}$/g);
      let pM = this.password == this.passwordAgain;

      return uV && eV && pV && paV && pM && this.acceptedStuff;
    }
  },
  methods: {
    register() {
      alert("A regisztráció még nem elérhető. További információk a Discord szerverünkön.")
    }
  }
});
</script>
