<script>
	import Section from "$lib/components/ui/+section.svelte";
	import Button from "$lib/components/ui/+button.svelte";
</script>

<Section>
	<div class="flex justify-between items-center h-screen gap-5 mt-10">
		<div class="text-white w-[50%] flex flex-col gap-2">
			<div>
				<h1 class="font-bold text-xl">
					<span class="text-[#39965F] text-2xl uppercase">Netify</span> — tools for subnetting
				</h1>
			</div>
			<div>
				<p class="text-[rgba(255,255,255,0.5)]">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi possimus unde
					veritatis expedita explicabo quae corporis magnam. Aliquam, nam sit eum cum,
					dolores numquam a laudantium recusandae ducimus iste consectetur alias vero
					dignissimos totam obcaecati!
				</p>
			</div>
			<div class="flex gap-4">
				<div class="w-[130px]">
					<Button styleBtn="primary">Go to App</Button>
				</div>
				<div class="w-[100px]">
					<a href="/#features">
						<Button styleBtn="secondary">More</Button>
					</a>
				</div>
			</div>
		</div>
		<div class="w-[30rem]">
			<img src="/images/app.svg" alt="APP Illustration" />
		</div>
	</div>
</Section>
