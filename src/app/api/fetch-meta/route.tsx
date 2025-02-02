// app/api/fetch-meta/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    // Fetch the webpage
    const response = await fetch(url);
    const html = await response.text();

    // Extract meta description using regex
    const metaMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i) ||
                     html.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"[^>]*>/i);

    if (metaMatch && metaMatch[1]) {
      return NextResponse.json({ description: metaMatch[1] });
    }

    // If no meta description found, try to get the first paragraph
    const paragraphMatch = html.match(/<p[^>]*>([^<]+)<\/p>/i);
    if (paragraphMatch && paragraphMatch[1]) {
      return NextResponse.json({ description: paragraphMatch[1] });
    }

    return NextResponse.json({ description: '' });
  } catch (error) {
    console.error('Error fetching meta description:', error);
    return NextResponse.json({ error: 'Failed to fetch meta description' }, { status: 500 });
  }
}