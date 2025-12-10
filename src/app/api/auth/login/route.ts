// app/login/route.ts
import { NextResponse } from "next/server";

let users: any[] = []; // same temp array (normally DB hota)

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({
    message: "Login successful",
    user: { id: user.id, email: user.email },
  });

  // Cookie set
  response.cookies.set("token", String(user.id), {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
