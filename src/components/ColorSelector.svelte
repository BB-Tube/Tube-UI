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
        -webkit-transition-duration: 0.4s; /* Safari */
  		transition-duration: 0.4s;
    }
    div:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
    span {
        display: flex;
        flex-direction: row;
        height: 100px;
        margin: 10px;
    }
</style>