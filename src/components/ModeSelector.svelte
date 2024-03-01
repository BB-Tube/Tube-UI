<select bind:value={selected} on:change={updateMode}>
    <option value="drop">Drop Mode</option>
    <option value="paint">Paint Mode</option>
</select>

<script>
    import { selectedMode } from "../stores";

    let selected;

    selectedMode.subscribe((value) => {
        selected = value;
    });



    const updateMode = () => {
        selectedMode.set(selected);
    }

</script>