import type { Config } from "drizzle-kit";

import 'dotenv/config'

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!
  },
  driver: "mysql2",  
} satisfies Config;