import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Snake" }
  ],
  matchupNumber: "031",
  contentId: "031-snake"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
