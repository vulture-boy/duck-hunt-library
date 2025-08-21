import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Jigglypuff" }
  ],
  matchupNumber: "012",
  contentId: "012-jigglypuff"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
