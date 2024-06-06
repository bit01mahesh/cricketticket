import express from "express" 
import bodyParser from "body-parser";



const app = express()
app.use(express.static("public"));

app.get("/", (req,res)=>{
  res.render("cricket.ejs");
})

app.get("/seat", (req,res)=>{
  res.render("index1.ejs");
})

app.get("/payment", (req,res)=>{
  res.render("payment.ejs");
})
app.get("/login", (req,res)=>{
  res.render("login.ejs");
})

app.listen(3000, () => 
  {
  console.log("app is running")
});