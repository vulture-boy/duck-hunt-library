import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Joker", displayName: "Normal" },
    { name: "Joker", displayName: "With Arsene" }
  ],
  matchupNumber: "071",
  contentId: "071-joker",
  pageDisplayName: "Joker"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
