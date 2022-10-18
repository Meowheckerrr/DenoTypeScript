const encoder = new TextEncoder //utf-8

const greetText = encoder.encode("Hello /n meowhecker 大人")

//write file 
await Deno.writeFile("greet.txt", greetText)