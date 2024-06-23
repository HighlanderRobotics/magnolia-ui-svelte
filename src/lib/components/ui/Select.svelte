<script lang="ts">
	import { fly } from 'svelte/transition';

	export let items: Item[] = [];

	interface Item {
		label: string;
		value: string;
		disabled?: boolean | null;
	}

	export let value: string | null = null;
	export let placeholder: string | null = null;
	export let disabled = false;
	export let ariaLabel: string | null = null;
	export let name: string | null = null;
	export let id: string | null = null;
	export let required = false;
	export let errorMessage: string | null = null;
</script>

<div class="select">
	<select
		bind:value
		aria-invalid={errorMessage != null}
		aria-errormessage={[null, ''].includes(errorMessage) ? null : errorMessage}
		{disabled}
		aria-disabled={disabled}
		aria-label={ariaLabel}
		{name}
		{id}
		aria-required={required}
		{required}
		class:error={errorMessage != null}
		class:empty={value == null}
	>
		{#if placeholder && value == null}
			<option value={null} disabled selected hidden>
				{placeholder}
			</option>
		{/if}

		{#each items as item}
			<option value={item.value}>{item.label}</option>
		{/each}
	</select>
</div>

{#if errorMessage}
	<div class="error-message" transition:fly={{ y: -10, duration: 200 }}>{errorMessage}</div>
{/if}

<style>
	.select {
		position: relative;
	}

	select {
		width: 100%;
		padding: 10px 14px;

		border-radius: 7px;
		border: 2px solid var(--light-gray);
		background: var(--secondary-container);

		outline: none;

		font-size: 16px;

		transition: 100ms;

		appearance: none;
	}

	.select::after {
		content: 'arrow_drop_down';
		position: absolute;
		right: 5px;
		top: 50%;
		transform: translateY(-50%);
		color: var(--light-gray-hover);

		pointer-events: none;
		font-family: 'Material Symbols Rounded Reduced';
		font-variation-settings: 'opsz' 38, 'GRAD' -200;
		font-size: 38px;
	}

	:global(.fullIconsWillLoad) .select::after {
		font-family: 'Material Symbols Rounded Full', 'Material Symbols Rounded Reduced';
	}

	select.empty {
		color: var(--placeholder);
	}

	select:focus:not(.error) {
		border-color: var(--light-gray-hover);
	}

	select:disabled {
		background-color: var(--background);
		color: var(--light-gray-hover);
		border: 2px solid var(--light-gray-faded);
		cursor: not-allowed;
	}

	select.empty:disabled {
		color: var(--light-gray);
	}

	.select:has(select:disabled)::after {
		color: var(--light-gray);
	}

	.error-message {
		color: var(--danger);
		font-size: 14px;
		padding-left: 14px;
		padding-right: 14px;
	}

	.error {
		border: 2px solid var(--danger);
	}
</style>
