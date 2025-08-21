import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Sephiroth (Normal)", displayName: "Normal" },
    { name: "Sephiroth (One-Winged)", displayName: "One-Winged" }
  ],
  matchupNumber: "078",
  contentId: "078-sephiroth",
  pageDisplayName: "Sephiroth"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
