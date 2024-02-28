<span>
    {#each colors as color}
        <div on:click={setColor(color)} style="--color: {color}; {currentSelectedColor === color? "height: 70px; width: 70px;" : ""}">
        </div>
    {/each}
</span>
<script>
    import { selectedColor } from "../stores";
    export let colors;

    let currentSelectedColor;

    selectedColor.subscribe((value) => {
        currentSelectedColor = value;
    });

    

    const setColor = (color) => {
        selectedColor.set(color);
    }

</script>
<style>
    div {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: var(--color);
        margin: 5px;
    }
    span {
        display: flex;
        flex-direction: row;
    }
</style>