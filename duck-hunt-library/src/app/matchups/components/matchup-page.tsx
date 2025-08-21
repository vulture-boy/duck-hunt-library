import '../../global.css'
import './styles.css'
import Header from "@/app/header";
import Footer from "@/app/footer";
import { getMatchupMarkdownContent } from '@/lib/markdown-utils';
import ClientContent from './character-matchup';
import { getNextMatchup, getPreviousMatchup } from '@/lib/matchup-data';
import MatchupNav from './matchup-nav';

interface CharacterVariant {
  name: string;
  displayName?: string;
}

export interface MatchupPageInfo {
  characterVariants: CharacterVariant[];
  matchupNumber: string;
  contentId: string;
  pageDisplayName?: string;
}

export default async function MatchupPage({ matchupInfo }: { matchupInfo: MatchupPageInfo }) {
  let content;
  
  try {
    const { contentHtml } = await getMatchupMarkdownContent(matchupInfo.contentId);
    
    if (!contentHtml) {
      throw new Error('No content found in markdown file');
    }
    
    console.log('Page: Content received, length:', contentHtml.length);
    content = <ClientContent 
      contentHtml={contentHtml} 
      {...matchupInfo}
    />;
  } catch (error) {
    console.error('Page: Error rendering matchup page:', error);
    content = <p>Error: Failed to load matchup content. Please check the console for details.</p>;
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-sm-12">
            <MatchupNav 
              previousMatchup={getPreviousMatchup(matchupInfo.matchupNumber)}
              nextMatchup={getNextMatchup(matchupInfo.matchupNumber)}
              title={`Matchups #${matchupInfo.matchupNumber}: ${matchupInfo.pageDisplayName || matchupInfo.characterVariants.map(v => v.displayName || v.name).join(' & ')}`}
              showPrevious={matchupInfo.matchupNumber !== "001"}
            />
            <hr/>
            {content}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
