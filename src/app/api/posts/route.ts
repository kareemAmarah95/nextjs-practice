export async function GET() {
  const res = await (await fetch("https://dummyjson.com/posts")).json();
  return Response.json(res);
}
