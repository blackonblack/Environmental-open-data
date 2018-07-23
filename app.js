var express = require("express")
var app = express()

app.listen(3000)

app.use(express.static("webApp"))

app.get("/",function(req,res) {
    res.sendFile(__dirname+"/webApp/main.html")
})

