import fs from 'fs';
import path from 'path';

export function getStaticContent(id: string): string {
  try {
    // Get all possible paths where content might be stored
    const possiblePaths = [
      path.join(process.cwd(), 'content/matchups', `${id}.md`),
      path.join(process.cwd(), '.next/static/markdown', `${id}.md`),
      path.join(process.cwd(), '.open-next/assets/content/matchups', `${id}.md`),
      path.join(process.cwd(), 'public/content/matchups', `${id}.md`)
    ];

    // Try each path until we find one that exists
    for (const contentPath of possiblePaths) {
      if (fs.existsSync(contentPath)) {
        console.log(`Found content at: ${contentPath}`);
        return fs.readFileSync(contentPath, 'utf8');
      } else {
        console.log(`Could not find file at ${contentPath}`);
      }
    }

    // If we get here, we couldn't find the file anywhere
    console.error(`Content not found in any location for: ${id}.md`);
    console.error('Tried paths:', possiblePaths);
    throw new Error(`Content file not found: ${id}.md`);
  } catch (error) {
    console.error('Error loading static content:', error);
    throw error;
  }
}
