<script lang="ts" setup>
let state = reactive({
  username: ``,
  email: ``,
  password: ``,
  passwordAgain: ``,
  acceptedStuff: false,
})

const usernameError = computed(() => !state.username.match(/^([A-z0-9_-]){3,20}$/g))
const emailError = computed(() => !state.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g))
const passwordError = computed(() => !state.password.match(/^.{8,128}$/g))
const passwordAgainError = computed(() => !state.passwordAgain.match(/^.{8,128}$/g))

const canRegister = computed(() => {
  let uV = state.username.match(/^([A-z0-9_-]){3,15}$/g);
  let eV = state.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  let pV = state.password.match(/^.{8,128}$/g);
  let paV = state.passwordAgain.match(/^.{8,128}$/g);
  let pM = state.password == state.passwordAgain;
  return uV && eV && pV && paV && pM && state.acceptedStuff;
})

async function register() {
  try {
    // const token = await $recaptcha.execute("login");
    // console.log("ReCaptcha token:", token);
    useHttp("/auth/register", {
      body: {
        username: state.username,
        email: state.email,
        password: state.password,
        // captcha: token
      },
      method: 'put'
    }).then(value => {
      value.execute()
      useRouter().push(`/api/auth/confirm-email?email=${state.email}`);
    }).catch(reason => {
      console.log("Login error:", reason);
      alert("Hiba történt!")
    })
  } catch (error) {
    console.log("Login error:", error);
    alert("Hiba történt!")
  }
}

</script>

<template>
  <div class="flex flex-col p-2">
    <spacer/>
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
        w-90
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
            type="email"
            placeholder="E-mail"
            class="input input-bordered w-full max-w-xs"
            v-model="state.email"
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

      <div class="form-control w-full max-w-xs mt-2">
        <input
            type="password"
            placeholder="Jelszó újra"
            class="input input-bordered w-full max-w-xs"
            v-model="state.passwordAgain"
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
          <input
              type="checkbox"
              checked="checked"
              class="checkbox"
              v-model="state.acceptedStuff"
          />
          <span class="label-text">Eladom a lelkemet is Bill Gécnek</span>
        </label>
      </div>

      <Turnstile />

      <button
          class="btn btn-primary w-full mt-6"
          @click="register()"
          :class="{ 'btn-disabled': !canRegister }"
          :disabled="!canRegister"
      >
        Regisztráció
      </button>
    </div>
    <spacer/>
  </div>
</template>
