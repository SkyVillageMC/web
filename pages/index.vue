<template>
  <div class="m-0 p-0 flex flex-col">
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/logo-large.webp"
          class="
            max-w-sm max-h-sm
            rounded-lg
            shadow-xl
            hover:-translate-y-5 hover:shadow-2xl
            transition-all
          "
        />
        <div>
          <h1 class="text-5xl font-bold h-16 overflow-fix-2">Új, modern szerver!</h1>
          <p class="py-6">
            Egy egyedi szerver, ahhol nem a mennyiségen, hanem a minőségen van a
            hangsúly.
          </p>
          <button class="btn btn-primary" @click="yes()">Regisztrálok!</button>
        </div>
      </div>
    </div>
    <svg
      class="w-screen"
      viewBox="0 0 900 280"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect fill="#303741" height="600" width="900" y="-319.5" x="0" />
        <path
          fill="#f1c40f"
          d="m0,78.5l16.7,-10c16.6,-10 50,-30 83.3,-26.2c33.3,3.9 66.7,31.5 100,27.7c33.3,-3.8 66.7,-39.2 100,-40.8c33.3,-1.7 66.7,30.3 100,35.6c33.3,5.4 66.7,-16 100,-21c33.3,-5 66.7,6.4 100,0.9c33.3,-5.5 66.7,-27.9 100,-36.2c33.3,-8.3 66.7,-2.7 100,10.7c33.3,13.3 66.7,34.3 83.3,44.8l16.7,10.5l0,207l-16.7,0c-16.6,0 -50,0 -83.3,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -83.3,0l-16.7,0l0,-203z"
        />
        <path
          fill="#f3b70b"
          d="m0,82.5l16.7,-1.8c16.6,-1.9 50,-5.5 83.3,1.5c33.3,7 66.7,24.6 100,35c33.3,10.3 66.7,13.3 100,15.8c33.3,2.5 66.7,4.5 100,-8c33.3,-12.5 66.7,-39.5 100,-52.3c33.3,-12.9 66.7,-11.5 100,-2c33.3,9.5 66.7,27.1 100,30.6c33.3,3.5 66.7,-7.1 100,-16.3c33.3,-9.2 66.7,-16.8 83.3,-20.7l16.7,-3.8l0,221l-16.7,0c-16.6,0 -50,0 -83.3,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -83.3,0l-16.7,0l0,-199z"
        />
        <path
          fill="#f3a90d"
          d="m0,199.5l16.7,-2.2c16.6,-2.1 50,-6.5 83.3,-18.6c33.3,-12.2 66.7,-32.2 100,-40.7c33.3,-8.5 66.7,-5.5 100,2c33.3,7.5 66.7,19.5 100,30.7c33.3,11.1 66.7,21.5 100,23.8c33.3,2.3 66.7,-3.3 100,-6.2c33.3,-2.8 66.7,-2.8 100,0c33.3,2.9 66.7,8.5 100,12.9c33.3,4.3 66.7,7.3 83.3,8.8l16.7,1.5l0,70l-16.7,0c-16.6,0 -50,0 -83.3,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -83.3,0l-16.7,0l0,-82z"
        />
        <path
          fill="#f39c12"
          d="m0,223.5l16.7,4.8c16.6,4.9 50,14.5 83.3,21.5c33.3,7 66.7,11.4 100,-0.6c33.3,-12 66.7,-40.4 100,-47.9c33.3,-7.5 66.7,5.9 100,5.7c33.3,-0.2 66.7,-13.8 100,-8.8c33.3,5 66.7,28.6 100,34.1c33.3,5.5 66.7,-7.1 100,-16.1c33.3,-9 66.7,-14.4 100,-8.5c33.3,5.8 66.7,22.8 83.3,31.3l16.7,8.5l0,34l-16.7,0c-16.6,0 -50,0 -83.3,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -83.3,0l-16.7,0l0,-58z"
        />
      </g>
    </svg>
    <div class="bg-epik-orange min-h-screen flex flex-col" id="features">
      <h1 class="text-center text-4xl md:text-5xl font-bold text-white mb-4 overflow-hidden overflow-fix">
        Miért játsz nálunk?
      </h1>
      <div class="flex-grow"></div>
      <div class="flex flex-col md:flex-row mx-auto">
        <FeatureCard
          title="Gyors"
          description="Nagy hangsúlyt fektetünk arra hogy mindig gyors legyen a szerver."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-16 h-16 text-black mx-auto my-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </FeatureCard>
        <FeatureCard
          title="Egyedi"
          description="Próbálunk minnél több kevésbé ismert vagy akár tejesen új játékmódot csinálni."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-16 h-16 text-black mx-auto my-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        </FeatureCard>
        <FeatureCard
          title="Minőségi"
          description="Az összes játékmódunk gondosan teszteljül mielőtt kiadjuk."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-16 h-16 text-black mx-auto my-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
            />
          </svg>
        </FeatureCard>
      </div>
      <div class="flex-grow"></div>
    </div>
    <svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(180, 450, 300.5)" id="svg_1">
        <rect id="svg_2" x="0" y="0" width="900" height="600" fill="#303741" />
        <path
          id="svg_3"
          d="m0,398l16.7,-10c16.6,-10 50,-30 83.3,-26.2c33.3,3.9 66.7,31.5 100,27.7c33.3,-3.8 66.7,-39.2 100,-40.8c33.3,-1.7 66.7,30.3 100,35.6c33.3,5.4 66.7,-16 100,-21c33.3,-5 66.7,6.4 100,0.9c33.3,-5.5 66.7,-27.9 100,-36.2c33.3,-8.3 66.7,-2.7 100,10.7c33.3,13.3 66.7,34.3 83.3,44.8l16.7,10.5l0,207l-16.7,0c-16.6,0 -50,0 -83.3,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -83.3,0l-16.7,0l0,-203z"
          fill="#f1c40f"
        />
        <path
          id="svg_4"
          d="m0,402l16.7,-1.8c16.6,-1.9 50,-5.5 83.3,1.5c33.3,7 66.7,24.6 100,35c33.3,10.3 66.7,13.3 100,15.8c33.3,2.5 66.7,4.5 100,-8c33.3,-12.5 66.7,-39.5 100,-52.3c33.3,-12.9 66.7,-11.5 100,-2c33.3,9.5 66.7,27.1 100,30.6c33.3,3.5 66.7,-7.1 100,-16.3c33.3,-9.2 66.7,-16.8 83.3,-20.7l16.7,-3.8l0,221l-16.7,0c-16.6,0 -50,0 -83.3,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -83.3,0l-16.7,0l0,-199z"
          fill="#f3b70b"
        />
        <path
          id="svg_5"
          d="m0,519l16.7,-2.2c16.6,-2.1 50,-6.5 83.3,-18.6c33.3,-12.2 66.7,-32.2 100,-40.7c33.3,-8.5 66.7,-5.5 100,2c33.3,7.5 66.7,19.5 100,30.7c33.3,11.1 66.7,21.5 100,23.8c33.3,2.3 66.7,-3.3 100,-6.2c33.3,-2.8 66.7,-2.8 100,0c33.3,2.9 66.7,8.5 100,12.9c33.3,4.3 66.7,7.3 83.3,8.8l16.7,1.5l0,70l-16.7,0c-16.6,0 -50,0 -83.3,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -83.3,0l-16.7,0l0,-82z"
          fill="#f3a90d"
        />
        <path
          id="svg_6"
          d="m0,543l16.7,4.8c16.6,4.9 50,14.5 83.3,21.5c33.3,7 66.7,11.4 100,-0.6c33.3,-12 66.7,-40.4 100,-47.9c33.3,-7.5 66.7,5.9 100,5.7c33.3,-0.2 66.7,-13.8 100,-8.8c33.3,5 66.7,28.6 100,34.1c33.3,5.5 66.7,-7.1 100,-16.1c33.3,-9 66.7,-14.4 100,-8.5c33.3,5.8 66.7,22.8 83.3,31.3l16.7,8.5l0,34l-16.7,0c-16.6,0 -50,0 -83.3,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -100,0c-33.3,0 -66.7,0 -83.3,0l-16.7,0l0,-58z"
          fill="#f39c12"
        />
      </g>
    </svg>
    <div class="min-h-screen flex flex-col">
      <h1 class="text-center text-4xl md:text-5xl font-bold text-white my-4 mb-8 overflow-fix">Az epikus csapatunk</h1>
      <div class="mx-12 flex flex-row flex-wrap justify-center">
        <TeamMemberCard v-for="u in team" v-bind:key="u.name" :user="u" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FeatureCard from "~/components/FeatureCard.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { FeatureCard },
  data: () => ({
    team: [
      {
        name: `Bendi`,
        bio: `Mindent túlbonyolít.`,
        tasks: [`Tulajdonos`, `Fejlesztő`],
        website: `https://bendi.cf`,
        github: `Bendimester23`,
        discord: `Bendi#9550`,
        imgUrl: `/team/bendi.png`
      }, {
        name: `PetiDev`,
        bio: `igen (https://imgur.com/a/L1dhhb5)`,
        tasks: [`néha Tulajdonos`, `néha építész`],
        website: `https://petidev.tk`,
        github: `PetiDev`,
        discord: `<Peti/>#1182`,
        imgUrl: `/team/peti.png`
      }, {
        name: `SmillingSoda7866`,
        bio: `Gyenge felfogású aranyos lény.`,
        tasks: [`Tulajdonos`, `Ő épít`],
        discord: `SmilingSoda7866#4818`,
        imgUrl: `/team/smillingsoda.png`
      }, {
        name: `Levi04`,
        bio: `Jöttünk láttuk, visszamentünk?`,
        tasks: [`Tulajdonos`, `Ő is valaki`],
        discord: `Levi04#8298`,
        imgUrl: `/team/levi.png`
      }
    ]
  }),
  methods: {
    yes() {
      alert(`Bendi lusta volt megcsinálni ezt a gombot.`)
    }
  }
});
</script>
