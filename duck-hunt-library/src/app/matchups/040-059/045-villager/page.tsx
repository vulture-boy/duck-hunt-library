import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "villager", displayName: "Villager" }
  ],
  matchupNumber: "045",
  contentId: "045-villager"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
