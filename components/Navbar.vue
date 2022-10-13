<template>
  <div class="navbar bg-base-300 m-2 rounded-lg w-[calc(100%-1rem)]">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="
            menu menu-compact
            dropdown-content
            mt-3
            p-2
            shadow
            bg-base-300
            rounded-box
            -translate-x-2
            w-[calc(100vw-1rem)]
          "
        >
          <li><NuxtLint to="/">Főoldal</NuxtLint></li>
          <li><NuxtLint to="/#features">Miért?</NuxtLint></li>
          <li><NuxtLint to="/#">Izé</NuxtLint></li>
          <li><NuxtLink to="/auth/login">Bejelentkezés</NuxtLink></li>
          <li><NuxtLink to="/auth/register">Regisztráció</NuxtLink></li>

        </ul>
      </div>
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">SkyVillage</NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><NuxtLint to="/">Főoldal</NuxtLint></li>
        <li><a href="/#features">Miért?</a></li>
        <li><NuxtLint to="/#">Izé</NuxtLint></li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink class="btn btn-sm btn-ghost px-4 invisible lg:visible" to="/auth/login">Bejelentkezés</NuxtLink>
      <NuxtLink class="btn btn-sm btn-ghost px-4 mx-2 invisible lg:visible" to="/auth/register">Regisztráció</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: `Navbar`,
});
</script>
