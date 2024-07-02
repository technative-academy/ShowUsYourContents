import express from "express";
import "dotenv/config";
import cors from "cors";
import users from "./src/routes/users.js";

const port = process.env.PORT ?? 3001;

const app = express();
app.use(express.json());
app.use(cors());

const router = express.Router();
app.use(router);

router.use("/users", users);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}.`);
});
