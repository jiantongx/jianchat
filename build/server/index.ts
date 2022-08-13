let path = require("path")
let value = require("./value")


let express = require("express")
let app = express()


app.use(express.static(path.join(__dirname,"../html")))


app.listen(value.port)