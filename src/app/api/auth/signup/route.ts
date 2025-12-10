// app/signup/route.ts
import { NextResponse } from "next/server";

let users: any[] = []; // temp store

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }

  const userExist = users.find((u) => u.email === email);
  if (userExist) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);

  return NextResponse.json({
    message: "Signup successful",
    user: { id: newUser.id, name, email },
  });
}
