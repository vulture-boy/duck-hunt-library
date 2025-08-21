import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Ryu (Normal)", displayName: "Normal" },
    { name: "Ryu (Strong)", displayName: "Strong" },
    { name: "Ken (Normal)", displayName: "Normal" },
    { name: "Ken (Strong)", displayName: "Strong" }
  ],
  matchupNumber: "060",
  contentId: "060-ryu-ken",
  pageDisplayName: "Ryu & Ken"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
