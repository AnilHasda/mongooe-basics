const mongoose=require("mongoose");
const connection=async ()=>{
  await mongoose.connect("mongodb://localhost:27017/mongoose");
  let schema=new mongoose.schema({
    name:string,
    age:number
  });
  let model=mongoose.model("test",schema);
  let data=new model(name:"Sarkar",age:21);
  let result=await data.save();
  console.log(result);
}
connection();
