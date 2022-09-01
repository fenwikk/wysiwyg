<script lang="ts">
import editingKey from "../stores/editing";

	import pageData from "../stores/pageData";
	import Editable from "./Editable.svelte";
import EditableButton from "./EditableButton.svelte";
import EditableImage from "./EditableImage.svelte";

	export let editing = false

	if (typeof document !== 'undefined') {
		editingKey.subscribe((value) => {
			if (value == "") {
				document.body.classList.remove("overflow-hidden");
			} else {
				document.body.classList.add("overflow-hidden");
			}
		});
	}
</script>

<div class="{$editingKey != "" ? "overflow-y-hidden" : ""}">
	<div class="z-20 absolute top-0 w-full">
		<div class="container flex items-center justify-between py-8 md:py-16">
			<EditableImage {editing} key="Logo" class="h-24" />
		</div>
	</div>
	
	<div
		class="w-full py-52 px-8 md:py-64 flex flex-col justify-center items-center bg-yellow relative"
	>
		<div class="z-10 relative">
			<h1 class="s-w-80 font-playfair font-medium text-5xl md:text-7xl leading-snug mb-12 md:mr-32 lg:mr-96">
				<Editable {editing} key="HeroH" />
			</h1>
			<p class="w-80 text-xl md:text-2xl">
				<Editable {editing} key="HeroB" />
			</p>
	
			<div class="mt-10">
				<EditableButton {editing} key="HeroCTA" class="bg-green hover:bg-lime-700 py-3 px-5 md:py-4 md:px-7 rounded-full text-lg md:text-xl text-white duration-200" />
				<!-- <button class="text-xl ml-4 border-black border-b-2 pt-[2px] hover:border-transparent hover:pt-[6pt] hover:pb-1 duration-200">Läs mer</button> -->
			</div>
	
			<div class="hidden md:block absolute top-32 left-[500px] ">
				<EditableImage {editing} key="Florist" class="h-[524px]" />
			</div>
		</div>
		
		<!-- <img
			src={vase1}
			class="z- 10 block md:hidden absolute h-64 right-16 -bottom-8 rotate-12"
			alt="vase"
			/> -->
			<!-- <img src={vase2} class="block md:hidden absolute h-44 -left-28 bottom-64 -rotate-45" alt="vase" /> -->
			<!-- <img
				src={wateringCan}
				class="block md:hidden absolute h-44 -right-16 -top-8 -rotate-45"
				alt="vase"
				/> -->
			</div>
			
	<div class="container flex justify-center items-center py-32 md:py-32">
		<div class="hidden md:block -mt-12 mr-16">
			<EditableImage {editing} key="Plant" class="h-96" />
		</div>

		<div class="md:w-1/2">
			<h2 class="font-playfair font-bold text-4xl leading-loose text-center md:text-left">
				<Editable {editing} key="AboutH" />
			</h2>
			<p class="text-center text-lg md:text-left">
				<Editable {editing} key="AboutB" />
			</p>
			<!-- <button class="text-xl mt-6 border-black border-b-2 pt-[6px] mb-1 hover:border-transparent hover:mb-0 hover:pb-1 duration-200">Läs mer</button> -->
		</div>
	</div>
	
	<footer class="bg-green flex justify-center items-center text-white py-4 px-12 text-center">
		<div>
			2021-{new Date().getFullYear()} &copy; Davidssons Gröna Fingrar HB. Alla rättigheter förbehållna.
			Sida av
			<a href="https://seabird.digital" class="ml-1 text-yellow underline hover:no-underline"
				>Seabird Digital</a
			>
		</div>
	</footer>
</div>
