<div>
    {#each column as color}
        <Ball color={color} />
    {/each}
</div>
<script>
    export let column;
    import Ball from "./Ball.svelte";
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

    }
</script>
<style>
    div:hover {
        outline: 1px solid #F6FDFE;
    }
</style>