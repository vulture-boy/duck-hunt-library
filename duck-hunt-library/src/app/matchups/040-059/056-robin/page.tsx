import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Robin" }
  ],
  matchupNumber: "056",
  contentId: "056-robin",
  pageDisplayName: "Robin"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
