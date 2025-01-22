<script>
	import Section from "$lib/components/ui/+section.svelte";
	import Feature from "$lib/components/ui/+feature.svelte";

	const features = [
		{
			id: 1,
			title: "Get Network Information",
			description:
				"Retrieve detailed information about a given network, including the network address, subnet mask, and range of hosts.",
			icon: "/images/icons/svg/internet.svg",
		},
		{
			id: 2,
			title: "Convert Prefix to Subnet Mask",
			description:
				"Easily convert an IP prefix length (CIDR) to its corresponding subnet mask.",
			icon: "/images/icons/svg/label.svg",
		},
		{
			id: 3,
			title: "Convert Subnet Mask to Prefix",
			description:
				"Convert a subnet mask into its corresponding CIDR prefix length to understand the size of the subnet.",
			icon: "/images/icons/svg/mask.svg",
		},
		{
			id: 4,
			title: "Convert IP Address to Binary",
			description:
				"Convert an IP address into its binary representation for network analysis and troubleshooting.",
			icon: "/images/icons/svg/bin.svg",
		},
		{
			id: 5,
			title: "Convert Binary to IP Address",
			description:
				"Convert a 32-bit binary string into a human-readable IPv4 address in dotted-decimal format, helping with network analysis and troubleshooting.",
			icon: "/images/icons/svg/convert.svg",
		},

		{
			id: 6,
			title: "Divide a Network into Subnets",
			description:
				"Efficiently split a larger network into smaller subnets based on a given IP address and subnet mask.",
			icon: "/images/icons/svg/subnets.svg",
		},
		{
			id: 7,
			title: "Open API",
			description:
				"Provide seamless and easy access to all network-related operations through an open API.",
			icon: "/images/icons/svg/api.svg",
		},
		{
			id: 8,
			title: "High-Speed Performance",
			description:
				"Ensure lightning-fast processing of all network calculations and operations for optimal user experience.",
			icon: "/images/icons/svg/speed.svg",
		},	
	];
</script>

<Section title="Features" sectionID="features">
	<div
		class="mt-12 grid grid-cols-[repeat(1,_300px)] gap-5 justify-items-center justify-center
		md:grid-cols-[repeat(2,_300px)] lg:grid-cols-[repeat(3,_300px)] xl:grid-cols-[repeat(4,_300px)]">
		{#each features as feature (feature.id)}
			<Feature data={feature} />
		{/each}
	</div>
</Section>
