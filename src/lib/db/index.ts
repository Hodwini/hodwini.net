import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema "./schemas";

const connectionString = process.env.DATABASE_URL || 'postgresql://username:password@localhost:5432/gamestore';

const client = postgres(connectionString, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
});

export const db = drizzle(client, { schema });

export * from './schema';