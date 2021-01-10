const express = require('express');
const path=require('path');

const app = express();
const PORT= process.env.PORT || 8000 ;

const myday= new Date().getDay() ;
const mytime= new Date().getHours();
console.log(myday, mytime);

function cont (req,res,next){
  if((myday>5|| myday===0) || (mytime<9 || mytime>17)){
   res.send("<h1>It's closed !!! </h1>")    
  }
  else{ next()}    
}

app.use(cont)

// app.get('/',(req,res)=>{
//    res.send('<h1>Hello there!!!</h1>') ;
// })

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));

  





