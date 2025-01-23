<script>
	import { onDestroy, onMount } from "svelte";
	import { fade } from "svelte/transition";

	import Button from "$lib/components/ui/+button.svelte";

	export let title;
	export let closeFunc;

	onMount(() => {
		document.body.style.overflow = "hidden";
	});

	onDestroy(() => {
		document.body.style.overflow = "auto";
	});
</script>

<section
	class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto"
	role="dialog"
	aria-labelledby="modal-title"
	aria-describedby="modal-description"
	transition:fade={{ duration: 100 }}>
	<div
		class="bg-[#1f2937] max-h-[400px] rounded-lg shadow-lg max-w-lg w-full p-6 relative flex flex-col gap-5 m-4 overflow-auto">
		<div class="flex justify-center items-center">
			<div class="text-center text-white text-xl font-bold uppercase">{title}</div>
			<div
				class="absolute top-4 right-4 cursor-pointer w-[20px] h-[20px] flex items-center group"
				on:click={closeFunc}
				aria-hidden="true">
				<span
					class="w-[20px] h-[1px] bg-[#9ca3af] block absolute rotate-[45deg] transition-colors duration-300 group-hover:bg-white"
				></span>
				<span
					class="w-[20px] h-[1px] bg-[#9ca3af] block absolute rotate-[-45deg] transition-colors duration-300 group-hover:bg-white"
				></span>
			</div>
		</div>
		<div>
			<slot />
		</div>
		<div class="w-[70px]">
			<Button on:click={closeFunc} styleBtn="primary" typeBtn="button">Ok</Button>
		</div>
	</div>
</section>
