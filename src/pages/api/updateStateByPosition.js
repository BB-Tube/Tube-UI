
export async function POST({request}) {
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();
      const position = body.position;
      const color = body.color;

      if (position.row > 32 || position.row < 0) {
        return new Response("Bad row position", { status: 418 });
      }

      if (position.column > 96 || position.column < 0) {
        return new Response("Bad row position", { status: 418 });
      }
  
      try {
        let state = JSON.parse(fs.readFileSync('public/state.json', 'utf8'));
  
        state[position.column][position.row] = color;
  
        fs.writeFileSync("public/state.json", JSON.stringify(state));
        return new Response("Updated state", { status: 200 });
  
      }
      catch (e) {
        console.log(e);
        return new Response(e, { status: 500 });
      }
    }
  }