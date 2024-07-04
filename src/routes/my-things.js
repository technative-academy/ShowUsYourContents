import express from "express";
import pool from "../db.js";
import authenticateToken from "../middleware/auth.js";
const router = express.Router();

//Defining routes

// router.get  /my-things
// GET TREASURES BY BAG

router.get("/", authenticateToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query(
      `SELECT bags.bag_name AS BagName, treasures.treasure_name AS TreasureName, treasures.id as id FROM treasures INNER JOIN bags ON treasures.bag_id = bags.id WHERE bags.user_id = ${userId};`
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error 500: Internal server error; users not found!");
  }
});

export default router;
