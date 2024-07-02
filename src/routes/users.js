import express from "express";
import pool from "../db.js";
const router = express.Router();

//Defining routes

// router.get   /users getAll
// GET /users - Retrieve all users

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error 500: Internal server error; users not found!");
  }
});

//router.get   /users/:id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error 500: Internal server error; user not found!");
  }
});

//router.post  //users (creating a new user)

//router.put   //users/:id (updated/replacing a user)

//router.delete   //users/:id (kill)

export default router;
