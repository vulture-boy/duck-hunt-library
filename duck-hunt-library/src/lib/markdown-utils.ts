import { fetchContent } from './content-api';
import { processMarkdownToHtml } from './static-markdown';

export async function getGenericMarkdownContent(id: string) {
  try {
    // In production, use pre-built content from the generated map
    if (process.env.NODE_ENV === 'production') {
      const { getStaticContent } = await import('../generated/content-map');
      try {
        const contentHtml = getStaticContent(id);
        console.log(`Loaded static content for ${id}, length: ${contentHtml.length}`);
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
      const { getStaticContent } = await import('../generated/content-map');
      try {
        const contentHtml = getStaticContent(id);
        console.log(`Loaded static content for ${id}, length: ${contentHtml.length}`);
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
