<script>
	export let title;
</script>

<section class="container mx-auto max-w-[1240px]">
	<div class="text-center">
		<h1 class="text-white font-bold text-4xl">{title}</h1>
	</div>
	<slot />
</section>
