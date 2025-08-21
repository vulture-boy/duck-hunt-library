import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "duck-hunt", displayName: "Duck Hunt" }
  ],
  matchupNumber: "059",
  contentId: "059-duck-hunt"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
