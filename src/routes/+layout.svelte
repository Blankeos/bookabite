<script lang="ts">
	import "$lib/styles/globals.css";
	import { container } from "@/lib/styles/variants";
</script>

<svelte:head>
	<title>BookBites</title>
</svelte:head>

<!-- 
    Separate this layout into a grouped route "(folder_name)" if you need two 
    layouts for Vertical (Most websites) and Horizontal (dashboard with a sidebar)
    https://kit.svelte.dev/docs/advanced-routing#advanced-layouts
 -->
<!-- This is a Vertical Layout -->
<div class="flex min-h-screen flex-col">
	<nav class={container({ class: "bg-blue-400" })}>This is the nav</nav>

	<main class="flex flex-1 flex-col bg-pink-100">
		<slot />
	</main>

	<footer class={container({ class: "bg-red-400" })}>This is the footer</footer>
</div>
