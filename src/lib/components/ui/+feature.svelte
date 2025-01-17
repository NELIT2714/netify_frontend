<script>
	export let data;
</script>

<div
	class="bg-[#161616] p-5 rounded-[30px] flex flex-col items-center w-[300px] gap-4 border-2 border-[#39965F] cursor-pointer active:-translate-y-[-10px] duration-[0.4s] lg:hover:translate-y-[-10px]">
	<div>
		<img src={data.icon} class="w-[60px]" alt="" />
	</div>
	<div class="flex flex-col justify-between gap-1">
		<div class="h-[50px] flex flex-col justify-center">
			<h2 class="text-white text-center">{data.title}</h2>
		</div>
		<div>
			<p class="text-white text-center font-light text-[rgba(255,255,255,0.7)]">
				{data.description}
			</p>
		</div>
	</div>
</div>
