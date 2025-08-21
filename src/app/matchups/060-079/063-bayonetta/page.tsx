import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Bayonetta" }
  ],
  matchupNumber: "063",
  contentId: "063-bayonetta"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
