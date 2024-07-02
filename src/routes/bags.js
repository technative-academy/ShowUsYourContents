import express from "express";
import pool from "../db.js";
const router = express.Router();

//Defining routes

// router.get   /bags getAll
// GET /bags - Retrieve all users

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bags");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error 500: Internal server error; no bags found!");
  }
});

//router.get   /bags/:id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM bags WHERE id = $1", [id]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send(
        "Error 500: Internal server error; bag not found! Please consult lost luggage..."
      );
  }
});

//router.post  //bags (creating a new bag)  NEEDS USER ID!!!

router.post("/", async (req, res) => {
  const { bag_name, description } = req.body;

  let result;
  try {
    result = await pool.query(
      "INSERT INTO bags (bag_name, description) values ($1, $2) RETURNING *;",
      [bag_name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(`DB error occurred when creating bag:\n${err}`);
    res.status(500).json({ error: "DB error occurred when creating bag" });
    return;
  }
});

//router.put   //bags/:id (updated/replacing a bag)  NEEDS USER ID

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { bag_name, description } = req.body;

  let result;
  try {
    result = await pool.query(
      "UPDATE bags SET bag_name = $1, description = $2 WHERE id = $3 RETURNING *;",
      [bag_name, description, id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(`DB error occurred when updating bag:\n${err}`);
    res.status(500).json({ error: "DB error occurred when updating bag" });
    return;
  }
});

//router.delete   //bag/:id (kill) ONLY USER CAN DELETE BAG

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let result;
  try {
    result = await pool.query("DELETE FROM bags WHERE id = $1 RETURNING *;", [
      id,
    ]);
    res.status(201).json({ message: "Deletion successful" });
  } catch (err) {
    console.error(`DB error occurred when deleting bag:\n${err}`);
    res.status(500).json({ error: "DB error occurred when deleting bag" });
    return;
  }
});

export default router;
