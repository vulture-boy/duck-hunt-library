import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMatchupMarkdownContent(id: string) {
  try {
    const matchupsDirectory = path.join(process.cwd(), 'public/content/matchups');
    const fullPath = path.join(matchupsDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
      throw new Error(`File not found: ${id}.md`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content } = matter(fileContents);

    // Convert markdown into HTML string
    const processedContent = await remark()
      .use(html, { 
        sanitize: false  // Don't sanitize to preserve formatting
      })
      .process(content);
    
    const contentHtml = processedContent.toString();

    return {
      contentHtml
    };
  } catch (error) {
    console.error('Error loading matchup markdown:', error);
    throw error;
  }
}
