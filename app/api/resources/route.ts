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
      `${supabaseUrl}/rest/v1/resources?select=id,title,description,category,url&order=created_at.desc`,
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

      return NextResponse.json(
        {
          ok: false,
          error: errorText,
        },
        { status: response.status }
      );
    }

    const resources = await response.json();

    return NextResponse.json({
      ok: true,
      resources,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Erro ao consultar o Supabase.",
      },
      { status: 500 }
    );
  }
}
