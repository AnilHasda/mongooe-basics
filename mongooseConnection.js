const mongoose=require("mongoose");
connection=async ()=>{
  let connect=await mongoose.connect("mongodb://localhost:27017/data");
  let schema=new mongoose.schema({
    name:string,
    age:number,
    class:string,
    address:string
  })
  let model= mongoose.model("student",schema);
  let data=new model({name:"Anil",age:21,class:bachelor,address:"Jhapa"});
  let result =await data.save();
  console.log(result);
  
}
connection();