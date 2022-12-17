<template>
  <div class="navbar bg-base-300 m-2 rounded-lg w-[calc(100%-1rem)] sticky top-2 z-50">
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
          <li><NuxtLink to="/">Főoldal</NuxtLink></li>
          <li><a href="/#features">Miért?</a></li>
          <li><a href="/#team">Csapatunk</a></li>
          <li><NuxtLink to="/auth/login">Bejelentkezés</NuxtLink></li>
          <li><NuxtLink to="/auth/register">Regisztráció</NuxtLink></li>

        </ul>
      </div>
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">SkyVillage</NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><NuxtLink to="/">Főoldal</NuxtLink></li>
        <li><a href="/#features">Miért?</a></li>
        <li><a href="/#team">Csapatunk</a></li>
      </ul>
    </div>
    <div class="navbar-end" v-if="$auth.loggedIn">
      <div class="dropdown dropdown-end">
          <div tabindex="0" class="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {{ $auth.user.username }}
          </div>
          <ul
            tabindex="0"
            class="
              p-2
              shadow-2xl
              menu
              dropdown-content
              bg-base-300
              rounded-box
              w-52
            "
          >
            <li>
              <nuxt-link to="/dashboard/profile"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
                >Profil</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/dashboard">Dashboard</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/dashboard/skin">Skin</nuxt-link>
            </li>
          </ul>
        </div>
        <button class="btn btn-square btn-ghost" @click="logout()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-6 h-6 stroke-current text-red-600"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
    </div>
    <div class="navbar-end" v-else>
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
