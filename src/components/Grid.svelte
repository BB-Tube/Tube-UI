<div draggable="false">
    <ModeSelector />
    <div draggable="false" class="table">
        {#each state as column, i}
            <Column id={i} column={column} />
        {/each}
    </div>
    <ColorSelector colors={["white", "black", "red", "orange", "yellow", "green", "blue", "aqua", "#123456"]}/>
    <div class="button-menu">
        <div on:click={fillTube} id="empty">
            Fill the TUBE
        </div>
        <div on:click={emptyColumn} id="empty">
            {#if isColumnDelete}
                Cancel
            {/if}
            {#if !isColumnDelete}
                Empty column
            {/if}      
        </div>
        <div on:click={emptyTube} id="empty">
            Empty the TUBE
        </div>
    </div>
</div>
<script>
    import ColorSelector from "./ColorSelector.svelte";
    import ModeSelector from "./ModeSelector.svelte";
    import Column from "./Column.svelte";
    import { onMount } from "svelte";
    import { selectedMode, selectedColor, isColumnDeleteStore, stateStore } from "../stores";

    let mode;
    let color;
    let isColumnDelete;
    let state;

    const updateState = async () => {
        await fetch("http://localhost:4321/api/updateState", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                state
            })
        });
    }

    selectedMode.subscribe((value) => {
        mode = value;
    });

    selectedColor.subscribe((value) => {
        color = value;
    });

    isColumnDeleteStore.subscribe((value) => {
        isColumnDelete = value;
    });

    stateStore.subscribe(async (value) => {
        state = value;
        if (state.length > 0) {
            await updateState();

        }
    });

    onMount(async function () {
        const response = await fetch("http://localhost:4321/api/getState");
        const data = await response.json();
        stateStore.set(data["state"]);

    });

    const fillTube = async () => {
        await fetch("http://localhost:4321/api/fillTube", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                color
            })
        });
        updateTable();

    }

    const updateTable = async () => {
        const response = await fetch("http://localhost:4321/api/getState");
        const data = await response.json();
        stateStore.set(data["state"]);
    }

    const emptyTube = async () => {
        await fetch("http://localhost:4321/api/clearState");
        updateTable();
    }

    const emptyColumn = async () => {
        isColumnDeleteStore.set(!isColumnDelete);
    }

    

</script>
<style>
    .button-menu {
        display: flex;
        flex-direction: row;
    }
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
        margin: 5px;
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