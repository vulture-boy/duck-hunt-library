import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "king-dedede", displayName: "King Dedede" }
  ],
  matchupNumber: "039",
  contentId: "039-king-dedede"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
