import express from "express";
import { getAllJSDocTags } from "typescript";
const router = express.Router();

//Defining routes

// router.get   /users getAll
router.get("/", async (req, res) => {
	const result = await pool.query("SELECT * from users", (err, rows) => {
		if (err) {
			res
				.status(500)
				.send("Error 500: Internal server error; users not found!");
		} else {
			res.status(200).json(result.rows);
		}
	});
});

//router.get   /users/:id

//router.post  //users (creating a new user)

//router.put   //users/:id (updated/replacing a user)

//router.delete   //users/:id (kill)










module.exports = router;