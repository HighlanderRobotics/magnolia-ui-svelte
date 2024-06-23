<script>import { createEventDispatcher } from "svelte";
export let variant = "primary";
export let element = "button";
export let href = void 0;
export let type = void 0;
export let disabled = false;
const dispatch = createEventDispatcher();
function handleClick(event) {
  dispatch("click", event.detail);
}
</script>

{#if element === 'a'}
	<a
		class="button {variant}"
		href={disabled ? undefined : href}
		on:click={handleClick}
		aria-disabled={disabled}
	>
		<slot />
	</a>
{:else if element === 'button'}
	<button
		class="button {variant}"
		on:click={handleClick}
		{type}
		{disabled}
		aria-disabled={disabled}
	>
		<slot />
	</button>
{/if}

<style>
	.button {
		display: inline-block;

		cursor: pointer;
		border: none;
		padding: 10px 20px;
		margin: 0;
		border-radius: 7px;

		font-family: Heebo, sans-serif;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		text-decoration: none;

		transition: 150ms;

		appearance: none;
	}

	:global(.density-compact) .button {
		padding: 6px 12px;
		border-radius: 5px;
		font-size: 14px;
	}

	:global(.density-spacious) .button {
		padding: 10px 20px;
		font-size: 16px;
		border-radius: 7px;
	}

	.primary {
		background-color: var(--victory-purple);
		color: var(--background);
	}

	.primary:hover {
		background-color: var(--victory-purple-hover);
	}

	.button[aria-disabled=true] {
		cursor: not-allowed;
	}

	.primary[aria-disabled=true] {
		background-color: var(--victory-purple-faded);
		color: var(--on-victory-purple-faded);
	}

	.secondary {
		background-color: var(--light-gray);
		color: var(--on-background);
	}

	.secondary:hover {
		background-color: var(--light-gray-hover);
	}

	.secondary[aria-disabled=true] {
		background-color: var(--light-gray-faded);
		color: var(--on-light-gray-faded);
	}

	.danger {
		background-color: var(--danger);
		color: #ffffff;
	}

	.danger:hover {
		background-color: var(--danger-hover);
	}

	.danger[aria-disabled=true] {
		background-color: var(--danger-faded);
		color: var(--on-danger-faded);
	}

	.text-only {
		color: var(--victory-purple);
		background-color: transparent;
	}

	.text-only:hover {
		color: var(--victory-purple-hover);
	}

	.text-only[aria-disabled=true] {
		color: var(--victory-purple-faded);
	}

	.text-only-secondary {
		color: var(--on-background);
		background-color: transparent;
	}

	.text-only-secondary:hover {
		color: var(--body)
	}

	.text-only-secondary[aria-disabled=true] {
		color: var(--light-gray);
	}
</style>
