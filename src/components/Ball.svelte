<div on:mouseenter={(e) => addBall(e)} style="--theme-color: {color !== "none" && color !== null? color : "#515151"}; --outline-color: {color !== "none" && color !== null? color : "#F6FDFE"}">
</div>
<script>
    import { selectedColor, selectedMode } from "../stores";
    export let color, position;

    let mode, currentSelectedColor;

    selectedMode.subscribe((value) => {
        mode = value;
    });

    selectedColor.subscribe((value) => {
        currentSelectedColor = value;
    })

    const addBall = async (e) => {
        if (mode !== "paint") {
            return;
        }

        if (e.buttons !== 1) {
            return;
        }

        let res = await fetch("http://localhost:4321/api/updateStateByPosition", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                position,
                color: currentSelectedColor
            })
        });


    }


</script>
<style>
    div {
        background-color: var(--theme-color);
        height: 8px;
        width: 8px;
        border-radius: 50%;
        outline: 1px solid var(--outline-color);
        margin: 3px;
    }
</style>