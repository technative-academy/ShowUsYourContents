import express from "express";
import pool from "../db.js";
const router = express.Router();
import authenticateToken from "../middleware/auth.js";

//Defining routes

//router.post  //treasures (creating a new treasure)  NEEDS USER ID!!!

router.post("/", authenticateToken, async (req, res) => {
  const { bagId, name, description } = req.body;
  const userId = req.user.id;
  let result;
  try {
    result = await pool.query(
      "INSERT INTO treasures (bag_id, user_id, treasure_name, description) values ($1, $2, $3, $4) RETURNING *;",
      [bagId, userId, name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(`DB error occurred when creating treasure:\n${err}`);
    res.status(500).json({ error: "DB error occurred when creating treasure" });
    return;
  }
});

// router.get   /treasures getAll
// GET /treasures - Retrieve all treasures

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM treasures");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("Error 500: Internal server error; no treasure found!");
  }
});

//router.get   /treasures/:id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM treasures WHERE id = $1", [
      id,
    ]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Error 500: Internal server error; treasure not found! Please consult lost luggage..."
      );
  }
});

//router.put   //treasures/:id (updated/replacing a treasure)  NEEDS USER ID

router.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  let result;
  try {
    result = await pool.query(
      "UPDATE treasures SET treasure_name = $1, description = $2 WHERE id = $3 RETURNING *;",
      [name, description, id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(`DB error occurred when updating treasure:\n${err}`);
    res.status(500).json({ error: "DB error occurred when updating treasure" });
    return;
  }
});

//router.delete   //treasures/:id (kill) ONLY USER CAN DELETE BAG

router.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;

  let result;
  try {
    result = await pool.query(
      "DELETE FROM treasures WHERE id = $1 RETURNING *;",
      [id]
    );
    res.status(201).json({ message: "Deletion successful" });
  } catch (err) {
    console.error(`DB error occurred when deleting treasure:\n${err}`);
    res.status(500).json({ error: "DB error occurred when deleting treasure" });
    return;
  }
});

export default router;
