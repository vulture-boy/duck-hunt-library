import '../global.css';
import Header from "@/app/header";
import Footer from "@/app/footer";
import { getGenericMarkdownContent } from '@/lib/markdown-utils';

export interface ContentPageInfo {
  contentId: string;
  title: string;
}

export default async function ContentPage({ pageInfo }: { pageInfo: ContentPageInfo }) {
  let content;
  
  try {
    const { contentHtml } = await getGenericMarkdownContent(pageInfo.contentId);
    
    if (!contentHtml) {
      throw new Error('No content found in markdown file');
    }
    
    content = <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
  } catch (error) {
    console.error('Page: Error rendering content page:', error);
    content = <p>Error: Failed to load content. Please check the console for details.</p>;
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-sm-12">
            <h1>{pageInfo.title}</h1>
            <hr/>
            {content}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
