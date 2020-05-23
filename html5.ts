import { serve } from "https://deno.land/std/http/server.ts";
import { body, h1, h2 } from "https://deno.land/x/ssr/index.ts";
import color from "https://deno.land/x/colors/index.ts";

const s = serve({ port: 1234 });

const template = body(
  { style: { color: color.green } },
  h1({ style: { color: color.blue } }, "Hello World"),
  h2({ style: { color: color.red } }, "Heading 2 red"),
  h2({ style: { color: color.green } }, "Heading 2 green"),
);

for await (const req of s) req.respond({ body: template });
