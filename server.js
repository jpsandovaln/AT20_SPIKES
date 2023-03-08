const express=require('express');
const dotenv=require('dotenv');
const compiler=require('./src/routes/compiler_routes/compiler_java_route')

const app =express();

dotenv.config();

//Routes
//Compiler Routes
app.use('/apip/v1/compile', compiler);



const port= process.env.PORT || 9090;

app.listen(port,() =>  {
  console.info('server running....');
})
