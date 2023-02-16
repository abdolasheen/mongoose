import { Mongoose ,Schema,model, Types} from "mongoose";

const commentSchema = new Schema({
  comment:{
    type:String,
  },
  userId:{
    type:Types.ObjectId,
    ref:"User",
    required:true
  }
},{
  timestamps:true
}) 

const commentModel = model("Comment",commentSchema)

export default commentModel;