import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Bowser" }
  ],
  matchupNumber: "014",
  contentId: "014-bowser"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
