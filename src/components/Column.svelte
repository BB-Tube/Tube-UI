<div>
    {#each ballColors as color}
        <Ball color={color} />
    {/each}
</div>
<script>
    export let column;
    import Ball from "./Ball.svelte";
    let ballColors = [];

    for (let i = 0; i < column.length; i++) {
        // just black and white for now, w-> white, anything else (b) -> black
        if (column[i] === "w") {
            ballColors.push("white");
        }
        else {
            ballColors.push("black");
        }
    }

    for (let i = ballColors.length; i < 32; i++) {
        ballColors.push("none");
    }
</script>