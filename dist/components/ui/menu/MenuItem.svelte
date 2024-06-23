<div class="menu-item">
    <slot />
</div>

<style>
    .menu-item {
        width: 100%;
        padding: 8px 14px;
        color: var(--on-background);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    :global(.density-compact) .menu-item {
        padding: 6px 10px;
        font-size: 14px;
    }
</style>