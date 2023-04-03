const mongoose=require("mongoose");
async function connection(){
  await mongoose.connect("mongodb://localhost:27017/data");
  let schema=new mongoose.schema({name:string});
  let model=mongoose.model("student",schema);
  let qry=new model({name:"Anil"});
  let result=await qry.save();
  let display=model.find({});
  let dis=await display.save();
  console.log(dis);
}