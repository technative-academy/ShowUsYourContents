import express from "express";
import pool from "../db.js";
const router = express.Router();

//Defining routes

// router.get   /users getAll
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * from users");
  res.json(result.rows);
});

//router.get   /users/:id

//router.post  //users (creating a new user)

//router.put   //users/:id (updated/replacing a user)

//router.delete   //users/:id (kill)

export default router;
