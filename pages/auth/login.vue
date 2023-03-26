<template>
  <div class="flex flex-col p-2">
    <spacer/>
    <h1 class="text-center font-bold text-4xl md:text-5xl mb-16">
      Bejelentkezés
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
            v-model="state.username"
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
            type="password"
            placeholder="Jelszó"
            class="input input-bordered w-full max-w-xs"
            v-model="state.password"
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

      <button
          class="btn btn-primary w-full mt-6"
          @click="login()"
          :disabled="!canLogin"
          :class="{ 'btn-disabled': !canLogin }"
      >
        Bejelentkezés
      </button>
    </div>
    <spacer/>
  </div>
</template>

<script lang="ts" setup>
const state = reactive({username: ``, password: ``})

const usernameError = computed(() => !state.username.match(/^([A-z0-9_-]){3,20}$/g))
const passwordError = computed(() => !state.password.match(/^.{8,128}$/g))
const canLogin = computed(() => state.username.match(/^([A-z0-9_-]){3,20}$/g) && state.password.match(/^.{8,128}$/g))

const auth = useAuth();
const router = useRouter();

async function login() {
  try {
    await auth.loginWith("local", {
      data: {
        username: state.username,
        password: state.password,
      },
    });
    await router.push(`/dashboard`);
  } catch (error) {
    console.log(error);
    alert("Hiba!");
  }
}

</script>