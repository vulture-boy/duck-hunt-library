import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Sheik" }
  ],
  matchupNumber: "016",
  contentId: "016-sheik"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
