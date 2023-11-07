<script lang="ts">
    import { cubicOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';

    export let open = false;
    export let anchor: 'left' | 'right' = 'left';

    function animation(node: HTMLElement, options: { duration: number; anchor?: 'left' | 'right' }) {
		return {
			duration: options.duration,
			easing: cubicOut,
			css: (t: number) => `transform: scaleX(${(t/30)+(1-(1/30))}) scaleY(${t}); transform-origin: top ${options.anchor || 'left'};`
		}
	}
</script>

<svelte:window on:keydown={(e) => {
    if (open && e.key === 'Escape') {
        open = false;
    }
}} />

<!-- Show the content -->
{#if open}
    <!-- Close when the outside is clicked -->
    <div
        class="overlay"
        aria-hidden="true"
        in:fade={{ duration: 200, delay: 200 }}
        out:fade={{ duration: 200 }}
        on:click={() => (open = false)}
    />

    <div
        class="menu {anchor}"
        in:animation={{ duration: 200, anchor }}
        out:animation={{ duration: 50, anchor }}
        aria-modal="true"
    >
        <slot />
    </div>
{/if}

<style>
    .menu {
        width: 222px;
        max-height: 140px;
        
        border-radius: 7px;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: var(--secondary-container);

        position: absolute;
        top: 100%;
        z-index: 50;
    }

    .menu.left {
        left: 0;
    }

    .menu.right {
        right: 0;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 49;
    }
</style>