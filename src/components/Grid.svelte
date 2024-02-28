<div>
    <div on:click={updateTable} class="table">
        {#each columns as column, i}
            <Column id={i} column={column} />
        {/each}
    </div>
    <ColorSelector colors={["white", "black"]}/>

    
    
</div>
<script>
    import Column from "./Column.svelte";
    import ColorSelector from "./ColorSelector.svelte";
    import { onMount } from "svelte";
    let columns = [];

    onMount(async function () {
        const response = await fetch("http://localhost:4321/api/getState");
        const data = await response.json();
        columns = data["state"];
    });

    const updateTable = async () => {
        const response = await fetch("http://localhost:4321/api/getState");
        const data = await response.json();
        columns = data["state"];

        // for (let i = columns.length; i < 96; i++) {
        //     for (let j = columns[i].length; j < 32, j++) {
        //         columns[i][j].push("none");
        //     }
        // }
    }
    


</script>
<style>
    .table {
        display: flex;
        flex-direction: row;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>