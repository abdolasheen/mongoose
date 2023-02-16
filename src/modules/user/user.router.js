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



import { Router } from 'express'

import {getAllusers,updateUser,deleteUser,searchUser6,searchUser7,searchUser8,searchUser9,searchUser10,getUserById} from "../user/controller/user.js"

const router = Router();
router.get("/getallusers",getAllusers)
router.put("/updateUser",updateUser)
router.delete("/deleteUser",deleteUser)
router.get("/searchUser6",searchUser6)
router.get("/searchUser7",searchUser7)

router.get("/searchUser8",searchUser8)
router.get("/searchUser9",searchUser9)
router.get("/searchUser10",searchUser10)
router.get("/getUserById/:id",getUserById)

export default router;