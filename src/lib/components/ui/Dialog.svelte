<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    export let open = false;
    export let canClose = true;
</script>

{#if open}
    <div
        class="backdrop"
        aria-hidden="true"
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 100 }}
        on:click={() => open = !canClose}
    >
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="dialog" in:fly={{ duration: 300, y: 100, easing: cubicOut }} on:click={(e) => e.stopPropagation()}>
            <slot />
        </div>
    </div>
{/if}

<style>
    .backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-color: #00000080;

        padding: 16px;
        display: grid;
        place-items: center;
        z-index: 99;
    }

    .dialog {
        background-color: var(--background);
        border-radius: 14px;
        margin: 0 auto;
        padding: 14px;
        width: min(600px, calc(100vw - 32px));
        max-height: calc(100vh - 32px);
        overflow-y: scroll;
        z-index: 100;
    }
</style>
