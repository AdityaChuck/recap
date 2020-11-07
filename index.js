// // const { counter, adder } = require("./uitil")

// // const val = counter(["1", "2", "3"])

// // console.log(val);

// // let sum = adder(1,5)

// // console.log(sum);

// const events = require("events")

// // const util = require("util")

// // let Person = function(name) {
// //     this.name = name
// // }

// // util.inherits(Person, events.EventEmitter)

// // let James = new Person("James")
// // let Mary = new Person("Mary")
// // let Ryu = new Person("Ryu")

// // let people = [James, Mary, Ryu]

// // people.forEach(person => {
// //     person.on('speak', (message) => {
// //         console.log(`${person.name} said ${message}`);
// //     })
// // })

// // James.emit("speak", "hey dudes")

// const fs = require("fs")

// // const readMe = fs.readFileSync('./readme.txt', 'utf-8') //we are blocking the code

// // // console.log(readMe);

// // // fs.writeFileSync('writeMe.txt', readMe)
// // fs.appendFileSync('./writeMe.txt', "Fuck you man!")

// // //async code
// // fs.readFile('readme.txt', 'utf-8', (err,data) => {
// //     fs.writeFile('writeMe.txt',data)
// // })

// // //unlink
// // fs.unlinkSync('writeMe.txt')

// //make directory

// // fs.mkdirSync('stuff') //blocking

// // fs.rmdirSync('stuff')

// // fs.mkdir('stuff', ()=>{
// //     console.log("made the directory");
// // })

// fs.rmdir('stuff',()=>{
//     console.log("deleted stuff folder");
// })

// const http = require('http')

// const server = http.createServer((req,res) => {
//     console.log(`req was made to ${req.url}`);
//     res.writeHead(200, { 'Content-Type' : 'text/plain' });
//     res.end('Hello there!')
// })

// server.listen(2300,"127.0.0.1")
// console.log("listening on port 3000");

const fs = require("fs");

//readable stream

// const readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf-8')

// const writeStream = fs.createWriteStream(__dirname + '/writeMe.txt')

// // readStream.on('data', (chunk) => {
// //     writeStream.write(chunk)
// // })
// // ====> exactly does the same as pipe

// readStream.pipe(writeStream)

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`req was made to ${req.url}`);

  // res.writeHead(200, { "Content-Type": "text/html" });
  res.writeHead(200,{ "Content-Type": "application/json"  })

  // const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");

  // readStream.pipe(res);
  // let myObj = {
  //   name: 'Ryu',
  //   job: 'Ninja',
  //   age: 29
  // }
  // res.end(JSON.stringify(myObj))

  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, { "Content-Type": "text/html" })
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8")
    readStream.pipe(res)
  }else{
    if(req.url === '/contact'){
      res.writeHead(200, { "Content-Type": "text/html" })
      const readStream = fs.createReadStream(__dirname + "/contact.html", "utf-8")
      readStream.pipe(res)
    } 
    else if(req.url === '/api/ninjas'){
      let persons = [
        {
          name: 'ryu',
          age: 29
        },
        {
          name: 'yoshi',  
          age: 32
        }
      ]
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(persons))
    }
    else{
      res.writeHead(200, { "Content-Type": "text/html" })
      const readStream = fs.createReadStream(__dirname + "/404.html", "utf-8")
      readStream.pipe(res)
    }
  }
});

server.listen(2300, "192.168.0.103");
console.log("listening on port 2300");
