<script lang="ts">
    export let density: 'spacious' | 'compact';
</script>

<div class="density-{density}">
    <slot />
</div>