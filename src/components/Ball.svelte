<span draggable="false" on:mousedown={(e) => addBall(e)} on:mouseenter={(e) => addBall(e)}>
    <div draggable="false"  style="--theme-color: {color !== "none" && color !== null? color : "#515151"}; --outline-color: {color !== "none" && color !== null? color : "#F6FDFE"}" />
</span>
<script>
    import { selectedColor, selectedMode, stateStore } from "../stores";
    export let color, position;

    let mode, currentSelectedColor, state;

    selectedMode.subscribe((value) => {
        mode = value;
    });

    selectedColor.subscribe((value) => {
        currentSelectedColor = value;
    });

    stateStore.subscribe((value) => {
        state = value;
    });

    const addBall = async (e) => {
        e.preventDefault();
        if (mode !== "paint") {
            return;
        }

        if (e && e.buttons !== 1) {
            return;
        }

        state[position.column][position.row] = currentSelectedColor;

        stateStore.set(state);


        // await fetch("http://localhost:4321/api/updateStateByPosition", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         position,
        //         color: currentSelectedColor
        //     })
        // });
    }


</script>
<style>
    div {
        background-color: var(--theme-color);
        height: 8px;
        width: 8px;
        border-radius: 50%;
        outline: 1px solid var(--outline-color);
    }
    span {
        height: 15px;
        width: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>