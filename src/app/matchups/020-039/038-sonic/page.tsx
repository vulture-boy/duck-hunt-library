import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "sonic", displayName: "Sonic" }
  ],
  matchupNumber: "038",
  contentId: "038-sonic"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
