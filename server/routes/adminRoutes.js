import express from "express";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/stats", protect, adminOnly, async (req, res) => {
  const data = {
    users: 120,
    sales: 340,
    revenue: 78500,
    chartData: [12, 19, 3, 5, 2, 3]
  };
  res.json(data);
});

export default router;
