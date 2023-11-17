<script>export let value = "";
export let placeholder = "";
export let errorMessage = null;
export let disabled = false;
export let ariaLabel = null;
export let type = "text";
export let name = null;
export let id = null;
export let required = false;
import { fly } from "svelte/transition";
</script>

<div class="input">
	<input
		{...{ type }}
		{placeholder}
		bind:value
		aria-invalid={errorMessage != null}
		aria-errormessage={[null, ''].includes(errorMessage) ? null : errorMessage}
		{disabled}
		aria-disabled={disabled}
		aria-label={ariaLabel}
		aria-required={required}
		{name}
		{id}
		{required}
	/>

	{#if errorMessage}
		<div class="error" transition:fly={{ y: -10, duration: 200 }}>{errorMessage}</div>
	{/if}
</div>

<style>
	div {
		display: inline-flex;
		flex-direction: column;
	}

	input {
		padding: 10px 14px;

		border-radius: 7px;
		border: 2px solid var(--light-gray);
		background: var(--secondary-container);

		outline: none;

		font-size: 16px;

		caret-color: var(--victory-purple);

		transition: 100ms;
	}

	input::placeholder {
		color: var(--placeholder);
	}

	input:focus {
		border: 2px solid var(--light-gray-hover);
	}

	input[aria-invalid='true'] {
		border: 2px solid var(--danger);
	}

	input:disabled {
		background-color: var(--background);
		color: var(--light-gray-hover);
		border: 2px solid var(--light-gray-faded);
		cursor: not-allowed;
	}

	input:disabled::placeholder {
		color: var(--light-gray);
	}

	.error {
		color: var(--danger);
		font-size: 14px;
		margin-left: 14px;
		margin-right: 14px;
	}
</style>
