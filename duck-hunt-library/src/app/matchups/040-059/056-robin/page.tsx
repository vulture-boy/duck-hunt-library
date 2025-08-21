import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "robin", variant: "bronze", displayName: "Bronze Sword" },
    { name: "robin", variant: "thunder", displayName: "Thunder Sword" }
  ],
  matchupNumber: "056",
  contentId: "056-robin",
  pageDisplayName: "Robin"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
