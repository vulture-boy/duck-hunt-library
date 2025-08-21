import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Ice Climbers" }
  ],
  matchupNumber: "015",
  contentId: "015-ice-climbers",
  pageDisplayName: "Ice Climbers"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
