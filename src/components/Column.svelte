<div style="--column-outline: {isColumnDelete? "red": "#F6FDFE"}" on:click={addBall}>
    {#each column as color, row}
        <Ball position={{column: id, row}} color={color} />
    {/each}
</div>
<script>
    export let column;
    export let id;
    import Ball from "./Ball.svelte";
    import { selectedColor, selectedMode, isColumnDeleteStore, stateStore } from "../stores";

    let currentSelectedColor;
    let mode;
    let isColumnDelete;
    let state;

    selectedColor.subscribe((value) => {
        currentSelectedColor = value;
    });

    selectedMode.subscribe((value) => {
        mode = value;
    });

    isColumnDeleteStore.subscribe((value) => {
        isColumnDelete = value;
    });

    stateStore.subscribe((value) => {
        state = value;
    });


    $: for (let i = column.length; i < 32; i++) {
        column.push("none");
    }

    const addBall = async () => {

        if (isColumnDelete) {
            // await fetch("http://localhost:4321/api/emptyColumn", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         column: id,
            //     })
            // });
            state[id] = [];
            stateStore.set(state);

            return;
        }

        if (mode !== "drop") {
            return;
        }



        let res = await fetch("http://localhost:4321/api/updateStateByColumn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                column: id,
                color: currentSelectedColor
            })
        });
        res = await res.json();
    }
</script>
<style>
    div:hover {
        outline: 1px solid var(--column-outline);
    }
    div {
        display: flex;
        flex-direction: column-reverse;
    }
</style>