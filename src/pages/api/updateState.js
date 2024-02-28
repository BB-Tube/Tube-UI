
export async function POST({request}) {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const state = body.state;

    for (let i = 0; i < import.meta.env.COLUMNS; i++) {
      if (state[i] >= import.meta.env.ROWS) {
        return new Response("Column " + i + " is filled to the brim", { status: 418 });
      }
    }

    if (state.length >= import.meta.env.COLUMNS) {
      return new Response("Too many columns", { status: 418 });
    }

    try {
      fs.writeFileSync("public/state.json", JSON.stringify(body.state));
      return new Response("Updated state", { status: 200 });
    }
    catch (e) {
      return new Response(e, { status: 500 });
    }
  }
}