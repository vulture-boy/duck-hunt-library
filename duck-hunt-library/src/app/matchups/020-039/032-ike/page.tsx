import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Ike" }
  ],
  matchupNumber: "032",
  contentId: "032-ike"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
