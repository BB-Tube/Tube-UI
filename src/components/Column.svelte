<div on:click={addBall}>
    {#each column as color}
        <Ball color={color} />
    {/each}
</div>
<script>
    export let column;
    export let id;
    import Ball from "./Ball.svelte";
    import { selectedColor } from "../stores";

    let currentSelectedColor;

    selectedColor.subscribe((value) => {
        currentSelectedColor = value;
    });


    $: for (let i = column.length; i < 32; i++) {
        column.push("none");
    }

    const addBall = async () => {

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



        console.log(res);
    }
</script>
<style>
    div:hover {
        outline: 1px solid #F6FDFE;
    }
</style>