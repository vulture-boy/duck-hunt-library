import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "diddy-kong", displayName: "Diddy Kong" }
  ],
  matchupNumber: "036",
  contentId: "036-diddy-kong"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
