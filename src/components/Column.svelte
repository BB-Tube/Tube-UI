<div on:click={addBall}>
    {#each column as color}
        <Ball color={color} />
    {/each}
</div>
<script>
    export let column;
    export let id;
    import Ball from "./Ball.svelte";
    import { getContext } from "svelte";
    // let ballColors = [];

    // for (let i = 0; i < column.length; i++) {
    //     // just black and white for now, w-> white, anything else (b) -> black
    //     if (column[i] === "w") {
    //         ballColors.push("white");
    //     }
    //     else {
    //         ballColors.push("black");
    //     }
    // }

    for (let i = column.length; i < 32; i++) {
        column.push("none");
    }

    const addBall = async () => {

        let color = getContext("color");
        console.log(color);

        let res = await fetch("http://localhost:4321/api/updateState", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                column: id,
                color
            })
        });
        res = await res.json();
        console.log(res);
    }
</script>
<style>
    div:hover {
        outline: 1px solid #F6FDFE;
    }
</style>