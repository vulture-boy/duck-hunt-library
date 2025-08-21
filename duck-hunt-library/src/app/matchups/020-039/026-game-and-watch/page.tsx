import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Mr. Game & Watch" }
  ],
  matchupNumber: "026",
  contentId: "026-game-and-watch"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
