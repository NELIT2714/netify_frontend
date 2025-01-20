<script>
	export let styleBtn;
	export let typeBtn;

	console.log(styleBtn);

	const styles = {
		primary: "bg-[#39965F]",
		secondary: "bg-[#2f2e2e]",
	};
</script>

<button
	class="p-2 rounded-[10px] w-full {styleBtn ? styles[styleBtn] : styles.primary}"
	type={typeBtn ? typeBtn : "button"}>
	<slot />
</button>
