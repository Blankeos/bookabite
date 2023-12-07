<script>
	import { button, container } from "@/lib/styles/variants";
</script>

<div class={container({ class: "h-full  flex-1 bg-orange-100" })}>
	<h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>

	<div class="flex flex-col items-start gap-y-2">
		<button class={button({})}>Get Started</button>
		<button class={button({ size: "sm", color: "secondary" })}
			>Another Button</button
		>
	</div>
</div>
