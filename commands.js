let path= require("path")
let fs = require('fs');
let request= require('request')
let pathObj= path.parse(__filename)

let objetoComandos= {
    pwd: function(cmd3, done){
        let output= ""
        output += pathObj.dir
        done(output)
    },
    date: function(cmd3, done){
        let output= ""
        output += Date()
        done(output)
    },
    ls: function(cmd3, done){
        let output= ""
        fs.readdir(pathObj.dir, function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                output += file.toString() + "\n"
            })  
            done(output)
          });
          
    },
    echo: function(cmd3, done){
        let output= ""
        output += cmd3 + "\n"
        done(output)
    },
    cat: function(cmd3, done){
        let output= ""
        fs.readFile(pathObj.dir +"/"+cmd3, function(err,data){ 
            if (err) throw err;
            output += data   
            done(output) 
        });    
        
    },
    head: function(cmd3, done){
        let output= ""
        fs.readFile(pathObj.dir +"/"+cmd3, function(err,data){ 
            let text= data.toString('utf8')
            let textoCortado= text.split('\n').slice(0,5).join('\n');
            if (err) throw err;
            output += textoCortado 
            done(output)
        });   
          
    },
    tail: function(cmd3, done){
        let output= ""
        fs.readFile(pathObj.dir +"/"+cmd3, function(err,data){ 
            let text= data.toString('utf8')
            
           let textoCortado= text.split('\n')
           let textoAImprimir= textoCortado.slice(textoCortado.length - 5).join('\n');
            if (err) throw err;
            output += textoAImprimir     
            done(output) 
        });   
        
    },
    wc: function(cmd3, done){
        let output= ""
        fs.readFile(pathObj.dir +"/"+cmd3, function(err,data){ 
            let text= data.toString('utf8')
           let textoCortado= text.split('\n')
           let textoAImprimir= textoCortado.length.toString()
            if (err) throw err;
            output += textoAImprimir
            done(output)
        });     
        
    },
    uniq: function(cmd3, done){
        let output= ""
        fs.readFile(pathObj.dir +"/"+cmd3, function(err,data){ 
            if (err) throw err;
        let text= data.toString('utf8')
           let textoCortado= text.split('\n')
           for (let i=0; i<textoCortado.length; i++){
               if(textoCortado[i] == textoCortado[i+1]){
                   textoCortado.splice(i, 1)
               }
           }
           let textoAImprimir= textoCortado.join('\n'); 
           output += textoAImprimir
           done(output)
        });     
    },
    sort: function(cmd3, done){
        let output= ""
        fs.readFile(pathObj.dir +"/"+cmd3, function(err,data){ 
            if (err) throw err;
        let text= data.toString('utf8')
        let textoCortado= text.split('\n')
        let textoAImprimir= textoCortado.sort().join('\n')
        console.log("Nota: Se ordenan primero por numeros, despues mayusculas y luego en orden alfabetico")
        output += textoAImprimir
        done(output)
        });
    },
    curl: function(cmd3, done){
        let output= ""
        request(cmd3, function (error, response, body) {
                if(error) throw error // Print the error if one occurred
                output+= body 
        done(output)
        });
    }
}


module.exports= objetoComandos