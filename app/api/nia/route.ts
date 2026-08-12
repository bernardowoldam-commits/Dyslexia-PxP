import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = String(body?.question || "").trim();

    if (!question) {
      return NextResponse.json(
        { error: "Digite uma pergunta." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("OPENAI_API_KEY não configurada.");

      return NextResponse.json(
        { error: "A chave da API não está configurada no servidor." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-5.6-luna",

        messages: [
          {
            role: "system",
            content: `
Você é a NIA — Núcleo de Inteligência e Apoio do projeto Dyslexia Tortuguitas.

Sua função é oferecer apoio educativo, acolhedor e objetivo sobre aprendizagem, leitura, estudo e estratégias de apoio.

REGRAS:
- Responda sempre em português do Brasil.
- Seja acolhedora, clara e simples.
- Responda em no máximo 80 palavras.
- Não faça diagnósticos.
- Não prescreva medicamentos.
- Não prometa cura.
- Não substitua profissionais.
- Quando necessário, recomende avaliação ou acompanhamento profissional.
- Evite respostas excessivamente longas.
- Dê orientações práticas quando apropriado.
            `.trim(),
          },
          {
            role: "user",
            content: question,
          },
        ],

        temperature: 0.4,

        max_completion_tokens: 180,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OPENAI API ERROR:", data);

      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            "A NIA não conseguiu responder agora.",
        },
        { status: response.status }
      );
    }

    const answer =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Não consegui preparar uma resposta agora. Tente novamente.";

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("NIA API ERROR:", error);

    return NextResponse.json(
      {
        error: "Erro interno ao preparar a resposta da NIA.",
      },
      { status: 500 }
    );
  }
}
