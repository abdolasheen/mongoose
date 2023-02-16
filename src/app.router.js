
import { connectDB } from "../DB/connection.js";
import authRouter from "./modules/auth/auth.router.js";
import commentRouter from "./modules/product/comment.router.js";
import userRouter from "./modules/user/user.router.js";

const initApp = (app, express) => {
  connectDB();
  app.use(express.json({}));
  app.use(userRouter)
  app.use("/auth",authRouter)
  app.use(commentRouter)

  app.use("*", (req, res, next) => {
    return res.json({ message: "404 Page not found" });
  });
};

export default initApp;
