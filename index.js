import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import users from "./src/routes/users.js";
import bags from "./src/routes/bags.js";
import treasures from "./src/routes/treasures.js";
import allThings from "./src/routes/my-things.js";
import auth from "./src/routes/auth.js";

dotenv.config();

const port = process.env.PORT ?? 3001;

const corsOptions = {
  origin: process.env.REACT_APP_DOMAIN,
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const router = express.Router();
app.use(router);

router.use("/users", users);
router.use("/auth", auth);
router.use("/bags", bags);
router.use("/treasures", treasures);
router.use("/my-things", allThings);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}.`);
});
