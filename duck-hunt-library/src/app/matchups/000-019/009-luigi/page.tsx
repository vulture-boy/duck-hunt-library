import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Luigi" }
  ],
  matchupNumber: "009",
  contentId: "009-luigi"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
