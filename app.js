const express=require('express');
const app=express();
const request=require('request')
const bodyParser=require('body-parser');
const https=require('https');
app.use(bodyParser());


app.get('/',function(req,res){
    res.sendFile(__dirname+'/signup.html')

})

app.post('/',(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
               
    };
    var jsonData=JSON.stringify(data)

    const url="https://us21.api.mailchimp.com/3.0/lists/84f62267ef" 

    var options={
        method:"post",
        auth:"adithyan:e71362615e0ac6a73b89b0c6c72689a5-us21"
    }

    const request= https.request(url,options, function(response){

        if(response.statusCode===200){
            res.sendFile(__dirname+'/success.html')

        }else{
            res.sendFile(__dirname+'/failure.html')
        }

        response.on("data",function(data){
           console.log(JSON.parse(data));
        })

    })

    request.write(jsonData);
    request.end();


})

app.post('/failed',(req,res)=>{
    res.redirect('/')

})




 








app.listen(3000,()=>{
    console.log("server is running in 3000")
})

// api key e71362615e0ac6a73b89b0c6c72689a5-us21

//list id 84f62267ef
