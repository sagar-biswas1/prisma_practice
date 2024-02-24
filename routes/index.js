import { Router } from "express";
import UserRoutes from "./userRoutes";

const router = Router();

router.use("/api/user", UserRoutes);

export default router;
