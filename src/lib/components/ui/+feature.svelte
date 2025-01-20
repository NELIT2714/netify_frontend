<script>
	export let data;
</script>

<div
	class="bg-[#171717] p-5 rounded-[15px] flex flex-col gap-3 border-2 border-[#1B1B1B] cursor-pointer duration-[0.4s]
			active:translate-y-[-10px] active:border-[#39965F]
			lg:hover:translate-y-[-10px] lg:hover:border-[#39965F]">
	<div class="flex gap-3">
		<div>
			<img src={data.icon} class="w-[60px]" alt="" />
		</div>
		<div class="flex flex-col">
			<h2 class="text-white">{data.title}</h2>
		</div>
	</div>
	<div>
		<p class="text-white font-light text-[rgba(255,255,255,0.7)]">
			{data.description}
		</p>
	</div>
</div>
