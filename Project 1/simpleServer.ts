import { serve } from "https://deno.land/std@0.60.0/http/server.ts";
const s = serve({ port: 8080 });
console.log("http://localhost:8080/");
for await (const req of s) {
  req.respond({ body: "Meowhecker\n Meow Meow" });
}
