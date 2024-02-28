export async function GET() {
    let state = {
        state: [

        ]
    }

    for (let i = 0; i < import.meta.env.COLUMNS; i++) {
        state["state"].push([]);
    }

    try {
        fs.writeFileSync("public/state.json", JSON.stringify(state["state"]));
        return new Response("cleared state", {status: 200});
    }
    catch (e) {
        return new Response(e, {status: 500})

    }

    

    
}