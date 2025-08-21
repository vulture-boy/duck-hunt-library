import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Simon" },
    { name: "Richter" }
  ],
  matchupNumber: "066",
  contentId: "066-simon-richter"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
