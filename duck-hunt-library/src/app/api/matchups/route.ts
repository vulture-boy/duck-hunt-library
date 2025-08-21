import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export const dynamic = 'force-dynamic'; // Ensure the route is not statically optimized

export async function GET(request: Request) {
  try {
    // Ensure we have a valid URL
    if (!request.url) {
      console.error('API: Invalid request URL');
      return NextResponse.json({ error: 'Invalid request URL' }, { status: 400 });
    }

    const url = new URL(request.url);
    console.log('API: Processing URL:', url.toString());
    
    const id = url.searchParams.get('id');
    if (!id) {
      console.error('API: Missing id parameter');
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }

    console.log('API: Processing request for id:', id);
    
    const matchupsDirectory = path.join(process.cwd(), 'public/content/matchups');
    console.log('API: Looking in directory:', matchupsDirectory);
    
    const fullPath = path.join(matchupsDirectory, `${id}.md`);
    console.log('API: Attempting to read file:', fullPath);

    if (!fs.existsSync(fullPath)) {
      console.error(`API: File not found: ${fullPath}`);
      return NextResponse.json({ error: `File not found: ${id}.md` }, { status: 404 });
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    console.log('API: Successfully read file, length:', fileContents.length);

    // Use gray-matter to parse the metadata section if we add any later
    const { content } = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html, { 
        sanitize: false  // Don't sanitize to preserve formatting
      })
      .process(content);
    
    const contentHtml = processedContent.toString();
    console.log('API: Successfully processed markdown to HTML, length:', contentHtml.length);

    return NextResponse.json({ contentHtml });
  } catch (error) {
    console.error('API: Error loading matchup content:', error);
    return NextResponse.json(
      { error: `Failed to load matchup content: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
