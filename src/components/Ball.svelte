<div style="--theme-color: {color !== "none"? color : "#515151"}; --outline-color: {color !== "none"? color : "#F6FDFE"}">

</div>
<script>
    export let color;

</script>
<style>
    div {
        background-color: var(--theme-color);
        height: 8px;
        width: 8px;
        border-radius: 50%;
        outline: 1px solid var(--outline-color);
        margin: 3px;
    }
</style>