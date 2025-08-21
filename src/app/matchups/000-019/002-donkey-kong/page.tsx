import MatchupPage from '../../components/matchup-page';

const matchupInfo = {
  characterVariants: [
    { name: "donkey-kong", displayName: "Donkey Kong" }
  ],
  matchupNumber: "002",
  contentId: "002-donkey-kong"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
