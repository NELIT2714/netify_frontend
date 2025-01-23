<script>
	import { goto } from "$app/navigation";

	import Section from "$lib/components/ui/+section.svelte";
	import Button from "$lib/components/ui/+button.svelte";
</script>

<Section>
	<div class="flex h-screen gap-5 p-5 items-center md:justify-between">
		<div class="text-white w-full flex flex-col gap-3 md:w-[50%]">
			<div>
				<h1 class="font-bold text-xl">
					<span class="text-[#39965F] text-2xl uppercase">Netify</span> — powerful tools for
					subnetting
				</h1>
			</div>
			<div>
				<p class="text-[rgba(255,255,255,0.5)]">
					Simplify your network management with Netify. Access detailed network
					information, perform seamless subnetting, and convert between prefixes, subnet
					masks, and binary IPs effortlessly. With our open API and lightning-fast
					performance, managing networks has never been easier.
				</p>
			</div>
			<div class="flex gap-4">
				<div class="w-[130px]">
					<Button on:click={() => goto("/app")} styleBtn="primary">Go to App</Button>
				</div>
				<div class="w-[100px]">
					<a href="/#features">
						<Button styleBtn="secondary">More</Button>
					</a>
				</div>
			</div>
		</div>
		<div class="hidden w-[30rem] md:block">
			<img src="/images/app.svg" alt="APP Illustration" />
		</div>
	</div>
</Section>
