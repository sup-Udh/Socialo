import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://udh:udh@socialo.z3lj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db("Auth_Cred");

  const users = db.collection("Github");

  return { db, users, };
}