<div on:click={addBall}>
    {#each column as color, row}
        <Ball position={{column: id, row}} color={color} />
    {/each}
</div>
<script>
    export let column;
    export let id;
    import Ball from "./Ball.svelte";
    import { selectedColor, selectedMode } from "../stores";

    let currentSelectedColor;
    let mode;

    selectedColor.subscribe((value) => {
        currentSelectedColor = value;
    });

    selectedMode.subscribe((value) => {
        mode = value;
    })


    $: for (let i = column.length; i < 32; i++) {
        column.push("none");
    }

    const addBall = async () => {

        if (mode !== "drop") {
            return;
        }

        let res = await fetch("http://localhost:4321/api/updateState", {
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
        outline: 1px solid #F6FDFE;
    }
    div {
        display: flex;
        flex-direction: column-reverse;
    }
</style>