let objetoComandos = require("./commands")

let done= function(output){
  process.stdout.write(output)
  process.stdout.write('\nprompt > ');
}

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var cmd2= data.toString().trim().split(" ")
  let cmd3= cmd2.slice(1).join(" ")
  objetoComandos[cmd2[0]](cmd3, done)
});