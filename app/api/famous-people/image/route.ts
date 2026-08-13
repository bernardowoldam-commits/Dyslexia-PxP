import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const imageUrl = request.nextUrl.searchParams.get("url");

    if (!imageUrl) {
      return new NextResponse("Imagem não informada.", {
        status: 400,
      });
    }

    const parsedUrl = new URL(imageUrl);

    if (
      parsedUrl.hostname !== "esxrzbpnktbqftxdqhcv.supabase.co" ||
      !parsedUrl.pathname.startsWith(
        "/storage/v1/object/public/famous-people/"
      )
    ) {
      return new NextResponse("URL de imagem não permitida.", {
        status: 403,
      });
    }

    const response = await fetch(imageUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      return new NextResponse("Não foi possível carregar a imagem.", {
        status: response.status,
      });
    }

    const contentType =
      response.headers.get("content-type") || "image/jpeg";

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Erro ao carregar imagem:", error);

    return new NextResponse("Erro ao carregar a imagem.", {
      status: 500,
    });
  }
}
