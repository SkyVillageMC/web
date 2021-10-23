<script lang="ts">
	import Navbar from "./components/Navbar.svelte";
</script>

<main class="font-main">
	<Navbar/>
	<div class="flex flex-col bg-landing w-full h-auto bg-fixed">
		<div class="flex flex-row py-52 self-center">
			<img src="./main.png" alt="Szerver logó" class="h-56 w-56">
			<div class="flex flex-col px-5 self-center">
				<h1 class="font-bold text-4xl">SkyVillage</h1>
				<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
			</div>
		</div>
		<div class="flex flex-col p-56 bg-blue-400">

		</div>
	</div>
</main>

<style global>
	@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
