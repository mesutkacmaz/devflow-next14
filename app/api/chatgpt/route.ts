import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { question } = await request.json();

  try {
    const response = await fetch("https://api.edenai.run/v2/text/generation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EDENAI_API_KEY}`,
      },
      body: JSON.stringify({
        response_as_dict: true,
        attributes_as_list: false,
        show_base_64: true,
        show_original_response: false,
        temperature: 0,
        max_tokens: 1000,
        providers: ["cohere"],
        text: question,
      }),
    });

    const data = await response.json();

    if (data?.cohere?.status !== "success") {
      throw new Error("Could not get answer from Eden AI");
    }

    const reply = data?.cohere?.generated_text;

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
