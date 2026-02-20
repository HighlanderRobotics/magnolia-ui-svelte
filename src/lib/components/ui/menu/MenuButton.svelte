<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/**
	 * The visual appearance of the button.
	 */
	export let variant: 'primary' | 'secondary' | 'danger' | 'text-only' | 'text-only-secondary' =
		'secondary';

	/**
	 * The DOM element to render the button with.
	 */
	export let element: 'a' | 'button' = 'button';

	/**
	 * `href` attribute of an `<a>` tag. Used only for `element="a"`.
	 */
	export let href: string | undefined = undefined;

	/**
	 * `type` attribute of a `<button>` tag. Used only for `element="button"`.
	 */
	export let type: 'button' | 'submit' | 'reset' | null | undefined = undefined;

	/**
	 * Prevents the component from being interacted with.
	 */
	export let disabled = false;

	const dispatch = createEventDispatcher();

	function handleClick(event: MouseEvent) {
		dispatch('click', event.detail);
	}
</script>

{#if element === 'a'}
	<a
		class="menu-item {variant}"
		href={disabled ? undefined : href}
		on:click={handleClick}
		aria-disabled={disabled}
	>
		<slot />
	</a>
{:else if element === 'button'}
	<button
		class="menu-item {variant}"
		on:click={handleClick}
		{type}
		{disabled}
		aria-disabled={disabled}
	>
		<slot />
	</button>
{/if}

<style>
	.menu-item {
		display: block;
		text-decoration: none;

		width: 100%;
		padding: 8px 14px;
		color: var(--on-background);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;

		appearance: none;
		background: none;
		border: none;
		cursor: pointer;
		outline: none;

		text-align: left;

		transition: background-color 150ms;
	}

	.primary {
		background-color: var(--victory-purple);
		color: var(--background);
	}

	.primary:hover {
		background-color: var(--victory-purple-hover);
	}

	.menu-item[aria-disabled='true'] {
		cursor: not-allowed;
	}

	.primary[aria-disabled='true'] {
		background-color: var(--victory-purple-faded);
		color: var(--on-victory-purple-faded);
	}

	.secondary {
		background-color: var(--secondary-container);
		color: var(--on-background);
	}

	.secondary:hover {
		background-color: var(--light-gray);
	}

	.secondary[aria-disabled='true'] {
		background-color: var(--secondary-container-faded);
		color: var(--on-light-gray-faded);
	}

	.danger {
		background-color: var(--danger);
		color: #ffffff;
	}

	.danger:hover {
		background-color: var(--danger-hover);
	}

	.danger[aria-disabled='true'] {
		background-color: var(--danger-faded);
		color: var(--on-danger-faded);
	}

	:global(.density-compact) .menu-item {
		padding: 6px 10px;
		font-size: 14px;
	}
</style>
