import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "greninja", displayName: "Greninja" }
  ],
  matchupNumber: "050",
  contentId: "050-greninja"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
