import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "joker", variant: "normal", displayName: "Normal" },
    { name: "joker", variant: "arsene", displayName: "With Arsene" }
  ],
  matchupNumber: "071",
  contentId: "071-joker",
  pageDisplayName: "Joker"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
