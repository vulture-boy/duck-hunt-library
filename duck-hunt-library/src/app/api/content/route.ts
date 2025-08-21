import { NextRequest } from 'next/server';
import { contentMap } from '@/generated/content-map';

export async function GET(request: NextRequest) {
  try {
    // Extract the contentId from the URL path
    const pathname = request.nextUrl.pathname;
    const contentId = pathname.split('/').pop() || '';

    // Get the content from the content map
    if (!contentMap[contentId]) {
      console.error(`Content not found for ID: ${contentId}`);
      return new Response('Not Found', { status: 404 });
    }

    const content = contentMap[contentId];
    
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
