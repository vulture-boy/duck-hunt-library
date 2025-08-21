import { fetchContent } from './content-api';
import { processMarkdownToHtml } from './static-markdown';

import { contentMap } from '../generated/content-map';

function getStaticContentSync(id: string): string {
  const content = contentMap[id];
  if (!content) {
    throw new Error(`Content not found for ${id}`);
  }
  console.log(`Loaded static content for ${id}, length: ${content.length}`);
  return content;
}

export async function getGenericMarkdownContent(id: string) {
  try {
    // In production, use pre-built content from the generated map
    if (process.env.NODE_ENV === 'production') {
      try {
        const contentHtml = getStaticContentSync(id);
        return { contentHtml };
      } catch (error) {
        console.error(`Error loading static content for ${id}:`, error);
        throw error;
      }
    }

    // In development, process markdown on-the-fly
    const rawContent = await fetchContent(id);
    const contentHtml = await processMarkdownToHtml(rawContent);
    return { contentHtml };
  } catch (error) {
    console.error(`Error processing markdown for ${id}:`, error);
    throw error;
  }
}

export async function getMatchupMarkdownContent(id: string) {
  try {
    // In production, use pre-built content from the generated map
    if (process.env.NODE_ENV === 'production') {
      try {
        const contentHtml = getStaticContentSync(id);
        return { contentHtml };
      } catch (error) {
        console.error(`Error loading static content for ${id}:`, error);
        throw error;
      }
    }

    // In development, process markdown on-the-fly
    const rawContent = await fetchContent(id);
    console.log(`File contents length: ${rawContent.length}`);
    const contentHtml = await processMarkdownToHtml(rawContent);
    console.log(`Final HTML length: ${contentHtml.length}`);

    return { contentHtml };
  } catch (error) {
    console.error('Error loading matchup markdown:', error);
    throw error;
  }
}
