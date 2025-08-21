import MatchupPage from '../../components/matchup-page';

// Server Component
// Force the page to be dynamic
export const dynamic = 'force-dynamic';

const matchupInfo = {
  characterVariants: [
    { name: "Mario" }
  ],
  matchupNumber: "001",
  contentId: "001-mario"
};

export default async function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />;
}
