// 'use server';

import { Client } from "pg";

export async function getAllMessages() {
  const client = new Client({
    user: "user-name",
    password: "strong-password",
    database: "postgres",
  });

  await client.connect();
  const res = await client.query("SELECT * FROM messages");
  return res.rows;
}
