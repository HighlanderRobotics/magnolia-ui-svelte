<script lang="ts">
	/**
	 * `true` if turned on, `false` if turned off.
	 *
	 * Use `bind:value` to control and read the value.
	 */
	export let value = false;

	/**
	 * Disables interaction.
	 */
	export let disabled = false;

	/**
	 * Localized accessibility label for screen readers.
	 */
	export let ariaLabel: string | null = null;

	function onInteraction() {
		if (!disabled) {
			value = !value;
		}
	}
</script>

<div
	class="container"
	role="switch"
	tabindex="0"
	aria-checked={value}
	class:on={value}
	aria-label={ariaLabel}
	aria-disabled={disabled}
	class:disabled
	on:click={onInteraction}
	on:keypress={(e) => {
		if (['Space', 'Enter'].includes(e.code)) onInteraction();
	}}
>
	<div class="slide" />
</div>

<style>
	.container {
		height: 34px;
		width: 58px;
		border-radius: 17px;

		background-color: var(--light-gray);

		display: flex;
		align-items: center;

		cursor: pointer;

		transition: 0.2s ease;
	}

	.on {
		background-color: var(--victory-purple);
	}

	.slide {
		width: 28px;
		height: 28px;
		border-radius: 50%;

		background-color: var(--secondary-container);

		transform: translateX(3px);

		transition: 0.2s ease;
	}

	.on .slide {
		transform: translateX(27px);
	}

	.container:not(.disabled):hover {
		background-color: var(--light-gray-hover);
	}

	.on:not(.disabled):hover {
		background-color: var(--victory-purple-hover);
	}

	.disabled {
		cursor: not-allowed;
		background-color: var(--light-gray-faded);
	}

	.disabled.on {
		background-color: var(--victory-purple-faded);
	}
</style>
