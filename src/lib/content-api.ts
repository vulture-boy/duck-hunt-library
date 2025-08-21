import fs from 'fs';
import path from 'path';

export async function fetchContent(id: string): Promise<string> {
  // In Node.js environment (during build/SSR)
  if (typeof window === 'undefined') {
    // Split the ID into section and filename if it contains a slash
    const [section, ...rest] = id.split('/');
    const filename = rest.length ? rest.join('/') : section;
    
    // If section is numeric (matchup ID), look in matchups, otherwise use the specified section
    const sectionPath = /^\d/.test(section) ? 'matchups' : section;
    
    const contentPath = path.join(process.cwd(), 'content', sectionPath, `${filename}.md`);
    if (!fs.existsSync(contentPath)) {
      throw new Error(`Content file not found: ${contentPath}`);
    }
    return fs.readFileSync(contentPath, 'utf8');
  }
  
  // In browser environment
  // Split the ID into section and filename if it contains a slash
  const [section, ...rest] = id.split('/');
  const filename = rest.length ? rest.join('/') : section;
  
  // If section is numeric (matchup ID), look in matchups, otherwise use the specified section
  const sectionPath = /^\d/.test(section) ? 'matchups' : section;
  
  const response = await fetch(`/content/${sectionPath}/${filename}.md`);
  if (!response.ok) {
    throw new Error(`Failed to fetch content: ${response.statusText}`);
  }
  return response.text();
}
