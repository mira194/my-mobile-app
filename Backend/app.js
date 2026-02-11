const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://db_user:admin@cluster0.sogdnzg.mongodb.net/?appName=Cluster0";
app.use(express.json());
mongoose.connect(mongoUrl).then(() => {
    console.log("Connected to database");
}).catch((e) => console.log(e));

app.use(express.json());

require('./UserDetails');

const User = mongoose.model("UserInfo");

app.get("/",(req,res)=>{
    console.log(req.body);
    res.send("Hello world");
})



app.post("/register",async (req,res)=>{
    const {name, email, mobile, password} = req.body;
    const oldUser = await User.findOne({email: email});
    if(oldUser){
        return res.send({error: "User already exists"});
    }
    try{
        await User.create({
            fullName: name,
            email: email,
            mobile: mobile,
            password: password
        })
        res.send({status:"ok" , message: "User registered successfully"});
    }catch(err){
        res.send({status:"error", error:"Duplicate email"});
    }
    
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});