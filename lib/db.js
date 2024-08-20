import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test12',
  password: 'admin69',
  port: 5432,
});

export default pool;
