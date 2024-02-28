<div>
    {#each colors as color}
        <div style="--color: {color}">
        </div>
    {/each}
</div>
<script>
    export let colors;

</script>
<style>
    div {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: var(--color);
    }
</style>