<div>
    
</div>
<script>

    const getState = async () => {
        let res = await fetch("http://localhost:4321/api/getState");
        res = await res.json();
        console.log(res);
    }

    getState();
    


</script>