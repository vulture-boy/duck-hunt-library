import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "hero", variant: "normal", displayName: "Normal" },
    { name: "hero", variant: "psyche-up", displayName: "Psych Up" },
    { name: "hero", variant: "oomph", displayName: "Oomph" },
    { name: "hero", variant: "psyche-up-oomph", displayName: "Psych Up + Oomph" }
  ],
  matchupNumber: "072",
  contentId: "072-hero",
  pageDisplayName: "Hero"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
