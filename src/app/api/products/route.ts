export async function GET() {
  const res = await (
    await fetch("https://dummyjson.com/products?limit=100", {
      cache: "no-store",
    })
  ).json();
  return Response.json(res);
}
