const express = require("express")
const app = express()
app.use(express.json())
app.get("/",(req, res)=>{
try {
   res.send("hello-world") 
} catch (error) {
    res.send(error)
}
})

const port = 5000;
app.listen(port, ()=>{
    console.log("server running")
})