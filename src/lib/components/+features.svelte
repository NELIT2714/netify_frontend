<script>
	import Section from "$lib/components/ui/+section.svelte";
	import Feature from "$lib/components/ui/+feature.svelte";

	const features = [
		{
			id: 1,
			title: "Calculate Subnet and Broadcast Address",
			description:
				"Quickly split a network into smaller subnets based on IP and mask. Simple and efficient.",
			icon: "/images/icons/svg/subnets.svg",
		},
		{
			id: 2,
			title: "Divide a Network into Subnets",
			description:
				"Quickly split a network into smaller subnets based on IP and mask. Simple and efficient.",
			icon: "/images/icons/svg/subnets.svg",
		},
		{
			id: 3,
			title: "Divide a Network into Subnets",
			description:
				"Quickly split a network into smaller subnets based on IP and mask. Simple and efficient.",
			icon: "/images/icons/svg/subnets.svg",
		},
		{
			id: 4,
			title: "Divide a Network into Subnets",
			description:
				"Quickly split a network into smaller subnets based on IP and mask. Simple and efficient.",
			icon: "/images/icons/svg/subnets.svg",
		},
	];
</script>

<Section title="Features">
	<div class="mt-12 grid grid-cols-4 gap-5 justify-items-center">
		{#each features as feature (feature.id)}
			<Feature data={feature} />
		{/each}
	</div>
</Section>
