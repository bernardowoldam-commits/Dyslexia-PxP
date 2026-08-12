import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body?.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        {
          ok: false,
          error: "Mensagem inválida.",
        },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5-mini",
      instructions:
        "Você é a NIA, Núcleo de Inteligência e Apoio do projeto Dyslexia Tortuguitas. Responda em português brasileiro, de forma acolhedora, clara e educativa. Você pode explicar conceitos e sugerir caminhos de estudo e apoio. Não diagnostique dislexia, não prometa cura e não substitua avaliação ou acompanhamento de profissionais qualificados.",
      input: message,
    });

    return NextResponse.json({
      ok: true,
      response: response.output_text,
    });
  } catch (error) {
    console.error("NIA API error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Não foi possível obter uma resposta da NIA.",
      },
      { status: 500 }
    );
  }
}
