// Assignment 6:
// using mongoose & express
// create user model (name, email, age, password ،createdAt, updatedAt)
// User APIs=>
// 1- sign up
// 2- sign in
// 3- update user
// 4- delete user
// 5- get all users
// 6- get users with name start with x with age less than y
// 7- get users with name end with x
// 8- get users with name contains x
// 9- get users with name fully match the name variable which destructed from body
// 10-get users with age between 20 and 50
// 11-get user by id 


// Comment APIs:
// 1- add comment
// 2- update comment (by owner only )
// 3- delete comment ( by owner only)
// 4- get all comments with their owner's information
// 5- get comment by id
// عوزاكو تعملو الupdateو الdeleteبكل الmethods كل methodتكون endpoint منفصله
// الديدلاين الخميس الساعه 7


import userModel from "../../../../DB/models/User.model.js";
// 1- sign up
export const signUp = async (req,res)=>{
  try {
    const userData = req.body;
  const user =await userModel.create(userData)

  res.json({message:"Done",user})
  } catch (error) {
  return error.code ==  11000 ? res.json({message:"Already existed user"}) :res.json({message:"catch ERR",error})
    
  }

}
// 2- sign in
export const signIn = async (req,res)=>{
  try {
    const {email , password} = req.body;
  const user =await userModel.find({email,password})
  user.length ==0 ? res.json({message:"No user found"}):res.json({message:"Done",user})
  } catch (error) {
  return res.json({message:"catch ERR",error})
    
  }

}
