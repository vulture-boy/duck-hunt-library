import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "ryu", variant: "normal", displayName: "Ryu (Normal)" },
    { name: "ryu", variant: "strong", displayName: "Ryu (Strong)" },
    { name: "ken", variant: "normal", displayName: "Ken (Normal)" },
    { name: "ken", variant: "strong", displayName: "Ken (Strong)" }
  ],
  matchupNumber: "060",
  contentId: "060-ryu-ken",
  pageDisplayName: "Ryu & Ken"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
