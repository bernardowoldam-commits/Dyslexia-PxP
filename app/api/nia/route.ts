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
      return NextResponse.json(
        { error: "OPENAI_API_KEY não configurada." },
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
            content:
              "Você é a NIA, Núcleo de Inteligência e Apoio do projeto Dyslexia Tortuguitas. Responda em português do Brasil, de forma acolhedora, educativa, clara e objetiva. Suas respostas devem ter no máximo 80 palavras. Não diagnostique, não prometa cura e não substitua profissionais. Quando a pergunta envolver saúde, avaliação ou tratamento, oriente o usuário a procurar um profissional qualificado.",
          },
          {
            role: "user",
            content: question,
          },
        ],
        temperature: 0.4,
        max_tokens: 180,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OPENAI API ERROR:", data);

      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            "A inteligência artificial não conseguiu responder agora.",
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
