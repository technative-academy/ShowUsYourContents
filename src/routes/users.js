import express from "express";
import pool from "../db.js";
import authenticateToken from "../middleware/auth.js";
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

// Get user treasures
router.get("/:userid/treasures", async (req, res) => {
  const { userid } = req.params;
  try {
    const result = await pool.query(
      `SELECT users.username, users.bio, bags.bag_name, treasures.treasure_name
      FROM users
      JOIN bags
      ON users.id = bags.user_id
      JOIN treasures
      ON bags.id = treasures.bag_id
      WHERE users.id = $1;`,
      [userid]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Error 500: Internal server error; treasure not found! Please consult lost luggage..."
      );
  }
});

//router.post  //users (creating a new user)

router.post("/", async (req, res) => {
  const { username, email, bio, password } = req.body;

  let result;
  try {
    result = await pool.query(
      "INSERT INTO users (username, email, bio, password, role) values ($1, $2, $3, $4, 'user') RETURNING *;",
      [username, email, bio, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(`DB error occurred when creating user:\n${err}`);
    res.status(500).json({ error: "DB error occurred when creating user" });
    return;
  }
});

//router.put   //users/:id (updated/replacing a user)

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { username, email, bio, password } = req.body;

  let result;
  try {
    result = await pool.query(
      "UPDATE users SET username = $1, email = $2, bio = $3, password = $4 WHERE id = $5 RETURNING *;",
      [username, email, bio, password, id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(`DB error occurred when updating user:\n${err}`);
    res.status(500).json({ error: "DB error occurred when updating user" });
    return;
  }
});

//router.delete   //users/:id (kill)

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let result;
  try {
    result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *;", [
      id,
    ]);
    res.status(201).json({ message: "Deletion successful" });
  } catch (err) {
    console.error(`DB error occurred when deleting user:\n${err}`);
    res.status(500).json({ error: "DB error occurred when deleting user" });
    return;
  }
});

export default router;
