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
  await client.end();
  return res.rows;
}

export async function uploadMessageToDB(message: string, id: number) {
  const client = new Client({
    user: "user-name",
    password: "strong-password",
    database: "postgres",
  });

  await client.connect();
  const query = `INSERT INTO messages (message, id) values(${message}, ${id})`;

  await client.query(query);
  await client.end();
}
