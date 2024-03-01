export async function POST({request}) {
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();
      const color = body.color;
  
      try {
        let state = [];
        
        for (let i = 0; i < import.meta.env.COLUMNS; i++) {
            for (let j = 0; j < import.meta.env.ROWS; j++) {
                state[i][j].push(color);
            }
        }

  
        fs.writeFileSync("public/state.json", JSON.stringify(state));
        return new Response("Updated state", { status: 200 });
  
      }
      catch (e) {
        console.log(e);
        return new Response(e, { status: 500 });
      }
    }
  }