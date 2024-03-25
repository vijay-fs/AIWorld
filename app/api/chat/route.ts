import { Message } from "@/app/types/chat";

export const runtime = "edge";

const isProduction = process.env.NEXT_PUBLIC_APP_MODE === "production";

export async function POST(req: Request) {
  const { apiKey, messages } = await req.json();

  // Hack: add a custom prompt to reduce the number of characters of the response.
  // To maximize API credits and reduce the response time.
  messages.map((message: Message) => {
    if (message.role === "user") {
      message.content = `Imagine you are Siri, Apple's digital assistant and a user asks you the question: "${message.content}". Kindly generate a suitable response with less than 100 characters.`;
    }
  });
  // End.

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: "mixtral-8x7b-32768",
      max_tokens: 1024,
      temperature: 0.5,
      n: 1,
      messages
    })
  });
  const data = await res.json();

  if (data.error && data.error.code === "invalid_api_key") {
    return Response.json("Something went wrong. Kindly check for error alerts.", {
      status: 401
    });
  }
console.log(data,"data in route")
  const output = data.choices[0]?.message?.content?.trim();
  // Demo response (for testing purposes)
  // const output = "Hello, I am Siri.";

  return Response.json(output);
}
