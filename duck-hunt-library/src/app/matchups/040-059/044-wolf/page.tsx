import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "wolf", displayName: "Wolf" }
  ],
  matchupNumber: "044",
  contentId: "044-wolf"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
