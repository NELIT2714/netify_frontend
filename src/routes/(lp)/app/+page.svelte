<script>
	import { goto } from "$app/navigation";
	import NetworkManagementForm from "$lib/components/+networkManagementForm.svelte";
</script>

<svelte:head>
	<title>
		Netify — Subnetting Tool | Calculate Subnet Masks, CIDR, Hosts, and Network Address
	</title>
</svelte:head>

<div
	on:click={() => goto("/")}
	class="size-[40px] absolute top-[5%] left-[5%] cursor-pointer"
	aria-hidden="true">
	<img src="/images/icons/svg/return.svg" alt="" />
</div>

<NetworkManagementForm />
