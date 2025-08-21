import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Corrin" }
  ],
  matchupNumber: "062",
  contentId: "062-corrin"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
