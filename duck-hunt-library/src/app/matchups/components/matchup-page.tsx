import '../../global.css'
import './styles.css'
import Header from "@/app/header";
import Footer from "@/app/footer";
import { getMatchupContent } from '@/lib/matchup-utils';
import ClientContent from './character-matchup';

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
    console.log('Page: Starting to fetch matchup content');
    const { contentHtml } = await getMatchupContent(matchupInfo.contentId);
    
    if (!contentHtml) {
      throw new Error('No content received from API');
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
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-sm-12">
          <h1>Matchups #{matchupInfo.matchupNumber}: {matchupInfo.pageDisplayName || matchupInfo.characterVariants.map(v => v.displayName || v.name).join(' & ')}</h1>
          <hr/>
          {content}
        </div>
      </div>
      <Footer />
    </div>
  );
}
