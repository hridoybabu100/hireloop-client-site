import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGDODB_DATA_BASE_URI);
const db = client.db(process.env.DATA_BASE_HIRELOOP_DB);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  //...other options
  emailAndPassword: {
    enabled: true,
  },
});
