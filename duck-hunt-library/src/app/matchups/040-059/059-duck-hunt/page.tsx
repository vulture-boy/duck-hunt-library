import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Duck Hunt" }
  ],
  matchupNumber: "059",
  contentId: "059-duck-hunt"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
