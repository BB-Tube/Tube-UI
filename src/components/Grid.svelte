<div>
    {#each columns as column}
        <Column column={column} />
    {/each}
    <ColorSelector colors={["white", "black"]}/>

    
    
</div>
<script>
    import Column from "./Column.svelte";
    import ColorSelector from "./ColorSelector.svelte";
    import { onMount, setContext } from "svelte";
    let columns = [];

    onMount(async function () {
        const response = await fetch("http://localhost:4321/api/getState");
        const data = await response.json();
        columns = data["state"];
    });
    


</script>
<style>
    div {
        display: flex;
        flex-direction: row;
    }
</style>