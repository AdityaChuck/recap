const express = require("express")
const path = require("path")


const app = express()
app.set('view engine', 'ejs')


app.get("/", (req,res) => {
    // res.sendFile(path.resolve(__dirname,"index.html"))
    res.render('home')  
})
app.get("/contact-us", (req,res) => {
    res.render('contact')
})
 
app.get("/profiles/:name", (req,res)=>{

    let data = {
        age: 29,
        job: "ninja",
        hobbies: ["shiting", "eating that shit"]
    }

    res.render('profiles', { person: req.params.name, data })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})
