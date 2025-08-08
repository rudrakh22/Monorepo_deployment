import express from 'express';
import {prisma} from "db/client"; 
const app = express();
const PORT = 8080;


app.post("/user",async(req,res)=>{
    // const {username,password} = req.body;
    const user=await prisma.user.create({
        data:{
            username:Math.random().toString(36).substring(2, 15),
            password:Math.random().toString(36).substring(2, 15)
        }
    })

    res.status(200).json({user});
});

app.get("/users",async(req,res)=>{
    const users=await prisma.user.findMany();
    res.status(200).json(users);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
