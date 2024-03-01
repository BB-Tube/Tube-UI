<div>
    <ModeSelector />
    <div on:click={updateTable} class="table">
        {#each columns as column, i}
            <Column id={i} column={column} />
        {/each}
    </div>
    <ColorSelector colors={["white", "black", "red", "orange", "yellow", "green", "blue"]}/>
    <div on:click={emptyTube} id="empty">
        Empty the TUBE
    </div>
</div>
<script>
    import ColorSelector from "./ColorSelector.svelte";
    import ModeSelector from "./ModeSelector.svelte";
    import Column from "./Column.svelte";
    import { onMount } from "svelte";
    import { selectedMode } from "../stores";

    let columns = [];
    let selected;

    selectedMode.subscribe((value) => {
        selected = value;
    });

    onMount(async function () {
        const response = await fetch("http://localhost:4321/api/getState");
        const data = await response.json();
        columns = data["state"];
    });

    const updateTable = async () => {
        const response = await fetch("http://localhost:4321/api/getState");
        const data = await response.json();
        columns = data["state"];
    }

    const emptyTube = async () => {
        await fetch("http://localhost:4321/api/clearState");
        updateTable();
    }

</script>
<style>
    .table {
        display: flex;
        flex-direction: row;
    }
    #empty {
        height: 50px;
        width: 200px;
        border-radius: 10px;
        background-color: #777777;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-transition-duration: 0.4s; /* Safari */
  		transition-duration: 0.4s;
        font-size: 25px;
    }
    #empty:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>