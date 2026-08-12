import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = String(body?.message || "").trim();

    if (!message) {
      return NextResponse.json(
        {
          ok: false,
          error: "Digite uma pergunta para a NIA.",
        },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-5-mini",

      instructions: `
Você é a NIA — Núcleo de Inteligência e Apoio da Dyslexia Tortuguitas.

Sua função é oferecer apoio EDUCATIVO sobre dislexia, aprendizagem, leitura,
escrita, organização dos estudos e estratégias de apoio.

REGRAS IMPORTANTES:

1. Responda sempre em português do Brasil.
2. Seja acolhedora, simples e objetiva.
3. NUNCA faça diagnóstico.
4. NUNCA diga que uma pessoa "tem dislexia" com base em uma pergunta.
5. NUNCA prometa cura ou resultado garantido.
6. NUNCA substitua avaliação ou acompanhamento profissional.
7. Quando a pergunta envolver diagnóstico, explique brevemente que somente
   profissionais qualificados podem avaliar isso.
8. Não faça textos longos.
9. Responda normalmente em no máximo 80 palavras.
10. Prefira parágrafos curtos ou, quando ajudar, até 3 tópicos.
11. Não repita a pergunta do usuário.
12. Não faça introduções longas.
13. Não inclua uma lista enorme de recomendações.
14. Termine de forma natural, sem acrescentar várias perguntas.
15. Se a pergunta não estiver relacionada ao objetivo educativo da NIA,
   responda brevemente que pode ajudar principalmente com temas de
   aprendizagem, dislexia e apoio educativo.

IMPORTANTE:
A NIA deve funcionar como uma orientação educativa inicial.
Ela não deve assustar o usuário, nem usar linguagem excessivamente técnica.

FORMATO IDEAL:
- Resposta direta.
- Explicação curta.
- Uma sugestão prática quando fizer sentido.

Se houver necessidade de procurar ajuda profissional, mencione isso de
forma breve e tranquila.
      `,

      input: message,

      max_output_tokens: 220,
    });

    const answer =
      response.output_text?.trim() ||
      "Não consegui preparar uma resposta agora. Tente novamente.";

    return NextResponse.json({
      ok: true,
      response: answer,
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
