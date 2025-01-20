<script>
	export let title;
	export let sectionID;
</script>

<section class="container mx-auto max-w-[1240px]" id={sectionID}>
	{#if title}
		<div class="text-center">
			<h1 class="text-white font-bold text-4xl">{title}</h1>
		</div>
	{/if}

	<slot />
</section>
