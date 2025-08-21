import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "snake", displayName: "Snake" }
  ],
  matchupNumber: "031",
  contentId: "031-snake"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
