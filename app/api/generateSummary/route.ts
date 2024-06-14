import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of the POST req
  const { todos } = await request.json();

  // Communicate with openAI GPT
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: false,
    messages: [
      { role: "system", content: "Welcome people" },
      {
        role: "user",
        content: `Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi ${JSON.stringify(todos)}`,
      },
    ],
  });

  return NextResponse.json(response.choices[0].message);
}
