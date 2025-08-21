import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Rosalina & Luma (Rosalina)", displayName: "With Luma" },
    { name: "Rosalina & Luma (Luma)", displayName: "Without Luma" }
  ],
  matchupNumber: "048",
  contentId: "048-rosalina",
  pageDisplayName: "Rosalina & Luma"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
