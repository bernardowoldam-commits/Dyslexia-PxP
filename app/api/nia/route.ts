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
        { error: "A NIA não está configurada corretamente no servidor." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
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

Sua função é oferecer apoio educativo sobre aprendizagem, leitura, estudo e estratégias de apoio.

Responda sempre em português do Brasil.

REGRAS:
- Seja acolhedora, clara e objetiva.
- Use linguagem simples e acessível.
- Responda de forma curta.
- Dê preferência a respostas de 2 a 5 frases.
- Não faça diagnósticos.
- Não prescreva medicamentos.
- Não prometa cura.
- Não substitua profissionais.
- Quando a pergunta envolver avaliação, saúde ou terapia, recomende procurar um profissional adequado.
- Quando possível, ofereça uma orientação prática.
- Não repita o aviso sobre profissionais em toda resposta se ele não for necessário.
              `.trim(),
            },
            {
              role: "user",
              content: question,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OPENAI API ERROR:", data);

      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            "A NIA não conseguiu responder agora.",
        },
        { status: 500 }
      );
    }

    const answer =
      data?.choices?.[0]?.message?.content?.trim() || "";

    if (!answer) {
      console.error("OPENAI API: resposta vazia.", data);

      return NextResponse.json(
        {
          error: "A NIA recebeu a pergunta, mas não retornou uma resposta.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("NIA API ERROR:", error);

    return NextResponse.json(
      {
        error: "Não foi possível conectar à NIA agora.",
      },
      { status: 500 }
    );
  }
}
