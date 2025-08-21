import { buildStaticContent } from '../src/lib/static-markdown';

async function main() {
  console.log('Building static content...');
  await buildStaticContent();
  console.log('Static content build complete!');
}

main().catch(console.error);
