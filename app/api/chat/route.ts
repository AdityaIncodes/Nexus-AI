import { model } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = await model.generateContent(prompt);

    return Response.json({
      response: result.response.text(),
    });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}