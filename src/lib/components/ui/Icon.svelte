<script lang="ts">
	import type { MaterialSymbols } from 'material-design-icons-literal-types';

	/**
	 * Material Symbols icon name.
	 *
	 * [Browse icons](https://fonts.google.com/icons?icon.style=Rounded&icon.set=Material+Symbols)
	 */
	export let icon: MaterialSymbols;

	/**
	 * The size of the icon, in pixels.
	 */
	export let size = 24;

	/**
	 * Whether the icon should be drawn outlined or filled.
	 */
	export let filled = false;

	/**
	 * Duration, in seconds, of an animation changing the style of the icon.
	 */
	export let transitionDuration = 0.1;

	/**
	 * CSS-parseable color of the icon.
	 */
	export let color: string | undefined = undefined;

	/**
	 * Visual emphasis of the icon.
	 *
	 * Default `0`, min `-200`, max `200`.
	 */
	export let grade = 0;
</script>

<span
	class="material-symbols-rounded"
	style:--fill={filled ? 1 : 0}
	style:--size={size}
	style:font-size="{size}px"
	style:--grade={grade}
	style:color
	style:transition-duration={transitionDuration}
>
	{icon}
</span>

<style>
	span {
		--fill: 0;
		--weight: 500;
		--grade: 200;
		--size: 24;

		font-variation-settings: 'FILL' var(--fill), 'wght' var(--weight), 'GRAD' var(--grade),
			'opsz' var(--size);

		transition-duration: 0.1s;

		user-select: none;
	}
</style>
