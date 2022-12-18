const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.set('view engine','ejs');
var encodedParser=bodyParser.urlencoded({extended:false});
app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/Result',encodedParser,(req,res)=>{
    if(req.body.add==="ADD")
     {const add=parseInt(req.body.n1) + parseInt(req.body.n2);
      res.render('Result',{res:add});}
    else if(req.body.subt==="SUBTRACT"){
        const s=req.body.n1-req.body.n2;
        res.render('Result',{res:s});
    }
    else if(req.body.mult==="MULT"){
        const m=req.body.n1*req.body.n2;
        res.render('Result',{res:m});
    }
    else if(req.body.div==="DIV"){
        if(req.body.n2==0) {
            res.send("MATH ERROR");
        }
        else{
        const d=req.body.n1/req.body.n2;
        res.render('Result',{res:d});
        }
    }
})


app.listen(3000,(res)=>{
    console.log("Server started at Port 3000");
});