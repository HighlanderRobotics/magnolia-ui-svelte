<script>export let icon;
export let size = 24;
export let filled = false;
export let transitionDuration = 0.1;
export let color = void 0;
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
