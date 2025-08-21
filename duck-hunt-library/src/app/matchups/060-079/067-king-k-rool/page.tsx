import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "king-k-rool", displayName: "King K. Rool" }
  ],
  matchupNumber: "067",
  contentId: "067-king-k-rool"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
