import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Extract the filename from the URL path
    const pathname = request.nextUrl.pathname;
    const filename = pathname.split('/').pop() || '';

    // Find the correct directory for the content
    const contentDir = path.join(process.cwd(), 'content/matchups');
    const filePath = path.join(contentDir, filename);

    // Read the file
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return new Response('Not Found', { status: 404 });
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    return new Response(content, {
      headers: {
        'Content-Type': 'text/markdown',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving content:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
