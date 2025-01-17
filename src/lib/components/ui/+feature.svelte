<script>
	export let data;
</script>

<div
	class="bg-[#161616] p-5 rounded-[30px] flex flex-col items-center w-[300px] gap-4 border-2 border-[#39965F] cursor-pointer active:-translate-y-[-10px] duration-[0.4s] lg:hover:translate-y-[-10px]">
	<div class="w-[90px]">
		<img src={data.icon} alt="" />
	</div>
	<div class="flex flex-col gap-3">
		<div>
			<h2 class="text-white text-center">{data.title}</h2>
		</div>
		<div>
			<p class="text-white text-center">{data.description}</p>
		</div>
	</div>
</div>
