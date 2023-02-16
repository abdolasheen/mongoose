import commentModel from "../../../../DB/models/Comment.model.js"
// Comment APIs:
// 1- add comment
export const addComment = async (req,res)=>{

const comment  =await commentModel.create({comment:req.body.comment,userId:req.body.id})

return res.json({message:"Done",comment})
}
// 2- update comment (by owner only )
export const updateComment = async (req,res)=>{
try {
  const userId = req.query.uid;
  const _id = req.query.cid;
  
  const comment =await commentModel.findOneAndUpdate({userId,_id},{
    comment:req.body.comment
  },{
    new:true
  })
  
  
  return comment ? res.json({message:"Updated",comment}):res.json({message:"NOt found"})
} catch (error) {
  return res.json({message:"ERR",error})
}
}
// 3- delete comment ( by owner only)
export const deleteComment = async (req,res)=>{
  try {
    const userId = req.query.uid;
    const _id = req.query.cid;
    
    const comment =await commentModel.findOneAndDelete({userId,_id})
    
    return comment ? res.json({message:"Deleted",comment}):res.json({message:"NOt found"})
  } catch (error) {
    return res.json({message:"ERR",error})
  }
  }
// 4- get all comments with their owner's information
export const getcommentswithusers = async(req,res)=>{
  try {
   
   const comments = await commentModel.find({}).populate('userId')
   return comments.length != 0 ? res.json({message:"Done",comments}) :res.json({message:"comments Not found"})
  } catch (error) {
   res.json({message:"Err",error})
  }
 }
// 5- get comment by id
export const getCommentByID = async(req,res)=>{
 try {
  const _id = req.params.id;
  // console.log({_id})
  const comment = await commentModel.findById(_id)
  return comment ? res.json({message:"comment with the same ID",comment}) :res.json({message:"comment Not found"})
 } catch (error) {
  res.json({message:"Err",error})
 }
}