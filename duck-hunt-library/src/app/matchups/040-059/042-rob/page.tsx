import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "rob", displayName: "R.O.B." }
  ],
  matchupNumber: "042",
  contentId: "042-rob"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
