import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "sephiroth", variant: "normal", displayName: "Normal" },
    { name: "sephiroth", variant: "one-wing", displayName: "One-Winged" }
  ],
  matchupNumber: "078",
  contentId: "078-sephiroth",
  pageDisplayName: "Sephiroth"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
