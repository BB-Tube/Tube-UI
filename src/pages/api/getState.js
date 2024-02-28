export async function GET() {

    try {
        const state = JSON.parse(fs.readFileSync('public/state.json', 'utf8'));

        return new Response(JSON.stringify({
            state
        }), {
            status: 200
        })
    } catch (e) {
        return new Response(e, { status: 500 });
    }
    
    

}