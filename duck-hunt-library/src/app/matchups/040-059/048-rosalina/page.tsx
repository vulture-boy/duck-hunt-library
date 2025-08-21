import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "rosalina", variant: "rosalina", displayName: "Rosalina" },
    { name: "rosalina", variant: "luma", displayName: "Luma" }
  ],
  matchupNumber: "048",
  contentId: "048-rosalina"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
