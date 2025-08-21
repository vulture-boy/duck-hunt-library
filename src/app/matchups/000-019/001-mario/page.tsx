import MatchupPage from '../../components/matchup-page';

const matchupInfo = {
  characterVariants: [
    { name: "mario", displayName: "Mario" }
  ],
  matchupNumber: "001",
  contentId: "001-mario"
};

export default async function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />;
}
