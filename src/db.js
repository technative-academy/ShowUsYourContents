import "dotenv/config";
import pg from "pg";
const { Pool } = pg;

// const pool = new Pool({
//   connectionString: process.env.DB_URI,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });



const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PSWD,
});

export default pool;