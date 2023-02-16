import userModel from "../../../../DB/models/User.model.js"

// 3- update user
export const updateUser = async (req,res)=>{

      try {
        const {email,age,_id} = req.body;
      // const user = await userModel.findOneAndUpdate(_id,{email,age},{new:true}).select("-password")
      const user = await userModel.findByIdAndUpdate(_id,{email,age})

      return user? res.json({message:"Done",user}) :res.json({message:"Not Found user"})
      } catch (error) {
      return res.json({message:"Err",error})
        
      }

}

// 4- delete user
export const deleteUser = async (req,res)=>{

  try {
    const {_id} = req.body;
  // const user = await userModel.findOneAndUpdate(_id,{email,age},{new:true}).select("-password")
  const user = await userModel.findByIdAndDelete(_id)

  return user? res.json({message:"Done",user}) :res.json({message:"Not Found user"})
  } catch (error) {
  return res.json({message:"Err",error})
    
  }

}

// 5- get all users
export const getAllusers = async(req,res)=>{
  try {
    const user =await userModel.find({})
  return user.length==0?res.json({message:"No users found"}): res.json({message:"Done",user})
  } catch (error) {
    return res.json({message:"Err",error})
  }
}
// 6- get users with name start with x with age less than y
export const searchUser6 = async(req,res)=>{
  try {
    const {x,y}= req.query;
  
    const user =await userModel.find({userName:{$regex : `^${x}`},age:{$lt: +y}})
  return user.length ==0 ? res.json({message:"No users found"}) : res.json({message:"Done",user})
  } catch (error) {
    return res.json({message:"Err",error})
  }
}
// 7- get users with name end with x
export const searchUser7 = async(req,res)=>{
  try {
    const {x}= req.query;
  
    const user =await userModel.find({userName:{$regex : `${x}$`}})
  return user.length ==0 ? res.json({message:"No users found"}) : res.json({message:"Done",user})
  } catch (error) {
    return res.json({message:"Err",error:error.stack})
  }
}
// 8- get users with name contains x
export const searchUser8 = async(req,res)=>{
  try {
    const {x}= req.query;
  
    const user =await userModel.find({userName:{$regex : `${x}`}})
  return user.length ==0 ? res.json({message:"No users found"}) : res.json({message:"Done",user})
  } catch (error) {
    return res.json({message:"Err",error:error.stack})
  }
}
// 9- get users with name fully match the name variable which destructed from body
export const searchUser9 = async(req,res)=>{
  try {

    const user =await userModel.find({userName:req.body.name})
  return user.length ==0 ? res.json({message:"No users found"}) : res.json({message:"Done",user})
  } catch (error) {
    return res.json({message:"Err",error:error.stack})
  }
}
// 10-get users with age between 20 and 50
export const searchUser10 = async(req,res)=>{
  try {
    // x => 50
    // y=>20
    const {x,y}= req.query;
    const user =await userModel.find({age:{
      
          $lte:+x,
          $gte:+y
        

    }})
  return user.length ==0 ? res.json({message:"No users found"}) : res.json({message:"Done",user})
  } catch (error) {
    return res.json({message:"Err",error})
  }
}
// 11-get user by id 
export const getUserById = async(req,res)=>{
  try {
      const {id} = req.params;
      const user =await userModel.findById({_id:id}).select("-password")
  return !user? res.json({message:"No users found"}) : res.json({message:"Done",user})
  } catch (error) {
    return res.json({message:"Err",error:error.stack})
  }
}