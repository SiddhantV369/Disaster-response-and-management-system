const { GoogleGenerativeAI } =require("@google/generative-ai");
const express=require('express');
const app=express();
const {createConnection}=require('mysql');
const connectionPool=createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'solutions'
})

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


const genAI = new GoogleGenerativeAI("");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});
async function call(prompt) {
    const result = await model.generateContent(prompt,{config:{
        maxOutputTokens:100
    }});
    return new Promise((res,rej)=>{res(result.response.text())})
}


connectionPool.connect((err) => {
    if(err)
    {
        console.log(err)
    }else{
        console.log("CONNECTION SUCCESSFUL!")
    }
})

app.get('/api/incidents',(request,response)=>{
    connectionPool.query(`select * from incidents`,(err, res)=>{
        let data=JSON.parse(JSON.stringify(res))    
        response.json(res)
    })

})

app.get('/api/chatbot/:prompt',(request,response)=>{
    let prompt=request.params.prompt
    call(prompt).then((data)=>{
        let obj=JSON.stringify({obj:data})
        response.json(obj)
    })
})

app.post('/api/incidentrep',(request,response)=>{
    let data=request.body
    response.send("Report submitted");
})

app.get('/api/fundraisers',(request,response)=>{
    connectionPool.query('select * from fundraisers',(err,res)=>{
        response.send(JSON.parse(JSON.stringify(res)));
    })
    
})

app.get('/api/vouleteer',(request,response)=>{
    connectionPool.query('select * from voulenteer',(err,res)=>{
        response.send(JSON.parse(JSON.stringify(res)));
    })
    
})

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log("server is running")
})
