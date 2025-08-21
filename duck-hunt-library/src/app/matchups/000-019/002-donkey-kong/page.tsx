import MatchupPage from '../../components/matchup-page';

// Server Component
// Force the page to be dynamic
export const dynamic = 'force-dynamic';

const matchupInfo = {
  characterVariants: [
    { name: "Donkey Kong" }
  ],
  matchupNumber: "002",
  contentId: "002-donkey-kong"
};

export default async function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />;
}
