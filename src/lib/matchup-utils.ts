import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { promises as fs } from 'fs';
import path from 'path';

export async function getMatchupContent(id: string) {
  try {
    // For debugging
    console.log(`Getting matchup content for id: ${id}`);
    
    // Read markdown file directly
    const filePath = path.join(process.cwd(), 'content', 'matchups', `${id}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    
    // Parse markdown
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      contentHtml
    };
  } catch (error) {
    console.error('Error loading matchup content:', error);
    return {
      contentHtml: '<p>Error loading matchup content. Please check the console for details.</p>'
    };
  }
}
