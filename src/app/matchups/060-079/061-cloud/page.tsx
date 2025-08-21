import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Cloud" }
  ],
  matchupNumber: "061",
  contentId: "061-cloud"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
