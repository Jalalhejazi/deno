// deno run --allow-net server.ts
import { serve } from "https://deno.land/std@0.52.0/http/server.ts"

const PORT =  1234

const s = serve({ port: PORT })

console.log(`http://localhost:${PORT}/`);

for await (const req of s) {
  req.respond({ body: "Hello World from deno 2020\n" });
}