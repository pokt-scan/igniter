import "dotenv/config";
import {mkdirSync, writeFileSync} from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { exportSchema } from "graphile-export";
import { makeSchema } from "postgraphile";
import { printSchema } from "graphql";
import preset from "./graphile.config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  try {
    const { schema } = await makeSchema(preset);
    if (!schema) {
      throw new Error("Schema is Falsy");
    }
    console.log("Schema resolved successfully");

    const exportFileLocation = resolve(__dirname, "../generated/schema");
    const schemaString = printSchema(schema);

    // Ensure the directory exists
    mkdirSync(dirname(exportFileLocation), { recursive: true });

    // Write the schema to a .graphql file
    writeFileSync(`${exportFileLocation}.graphql`, schemaString);
    console.log(`Schema Description exported to ${exportFileLocation}.graphql`);

    // Export the executable schema
    await exportSchema(schema, `${exportFileLocation}.mjs`, {
      mode: "typeDefs",
    });
    console.log(`Executable schema exported to ${exportFileLocation}.mjs`);
    process.exit(0);
  } catch (error) {
    console.error("Error in main function:", error);
    process.exit(1);
  }
}

main();
