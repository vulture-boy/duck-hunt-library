import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Bowser Jr." }
  ],
  matchupNumber: "058",
  contentId: "058-bowser-jr"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
