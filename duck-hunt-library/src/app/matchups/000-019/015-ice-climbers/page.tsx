import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "ice-climbers-duo", displayName: "Ice Climbers"},
    { name: "ice-climbers-solo", displayName: "Solo Climber"}
  ],
  matchupNumber: "015",
  contentId: "015-ice-climbers",
  pageDisplayName: "Ice Climbers"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
