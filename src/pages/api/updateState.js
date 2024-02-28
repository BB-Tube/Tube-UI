
export async function POST({request}) {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const state = body.state;

    try {
      fs.writeFileSync("public/state.json", JSON.stringify(body.state));
      return new Response("Updated state", { status: 200 });
    }
    catch (e) {
      return new Response(e, { status: 500 });
    }
  }
}