import mongoose from "mongoose"
export const connectDB = async () =>{
  return await mongoose.connect(`mongodb://127.0.0.1:27017/SaturdayStickyNote`).then(result =>{
    console.log("DB id Connected........");
  }).catch(err=>console.log(`Fail to connect ...........${err}`))
}