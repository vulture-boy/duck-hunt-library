import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectories = [
  path.join(process.cwd(), 'content/matchups'),
  path.join(process.cwd(), 'content/technique'),
  path.join(process.cwd(), 'content/general')
];
const outputDirectory = path.join(process.cwd(), 'src/generated');

export async function processMarkdownToHtml(markdownContent: string) {
  const { content } = matter(markdownContent);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  return processedContent.toString();
}

export async function buildStaticContent() {
  // Ensure output directory exists
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  // Generate the content map
  const contentMap: { [key: string]: string } = {};
  
  // Process each content directory
  for (const contentDirectory of contentDirectories) {
    if (!fs.existsSync(contentDirectory)) continue;

    // Get all markdown files
    const files = fs.readdirSync(contentDirectory);
    
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      
      // Get the section from the directory path
      const section = path.basename(contentDirectory);
      const id = file.replace(/\.md$/, '');

      // For matchups, use just the id, for other sections prefix with section name
      const contentId = section === 'matchups' ? id : `${section}/${id}`;
      
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Convert markdown to HTML
      const htmlContent = await processMarkdownToHtml(fileContents);
      contentMap[contentId] = htmlContent;
    }
  }
  
  // Generate the TypeScript file
  const tsContent = `// This file is auto-generated. Do not edit manually.
export const contentMap: { [key: string]: string } = ${JSON.stringify(contentMap, null, 2)};

export function getStaticContent(id: string): string {
  const content = contentMap[id];
  if (!content) {
    throw new Error(\`Content not found for \${id}\`);
  }
  return content;
}
`;

  // Write the TypeScript file
  fs.writeFileSync(path.join(outputDirectory, 'content-map.ts'), tsContent);
}
