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
  if(cmd2[0] == "pwd"){
    objetoComandos.pwd(cmd3, done)
  } else if(cmd2[0] == "date"){
    objetoComandos.date(cmd3, done)
  }else if (cmd2[0] == "ls"){
      objetoComandos.ls(cmd3, done)
  }else if(cmd2[0] == "echo"){
    objetoComandos.echo(cmd3, done)
  } else if(cmd2[0] == "cat"){
    objetoComandos.cat(cmd3, done)
  }else if(cmd2[0] == "head"){
    objetoComandos.head(cmd3, done)
  }else if(cmd2[0] == "tail"){
    objetoComandos.tail(cmd3, done)
  }else if(cmd2[0] == "wc"){
    objetoComandos.wc(cmd3, done)
  }else if(cmd2[0] == "uniq"){
    objetoComandos.uniq(cmd3, done)
  }else if(cmd2[0] == "sort"){
    objetoComandos.sort(cmd3, done)
  }

});