import { defineConfig } from "drizzle-kit";

defineConfig({
    dialect: 'postgresql',
    schema: './server/database/schemas/*',
    out: './drizzle'
})