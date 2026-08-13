import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          ok: false,
          error: "Configuração do Supabase não encontrada.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/famous_people?select=id,name,category,description,image_url,article_url&order=created_at.desc`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("SUPABASE FAMOUS PEOPLE ERROR:", errorText);

      return NextResponse.json(
        {
          ok: false,
          error: errorText,
        },
        { status: response.status }
      );
    }

    const people = await response.json();

    return NextResponse.json({
      ok: true,
      people,
    });
  } catch (error) {
    console.error("FAMOUS PEOPLE API ERROR:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Erro ao consultar o Supabase.",
      },
      { status: 500 }
    );
  }
}
