import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "dr-mario", displayName: "Dr. Mario"}
  ],
  matchupNumber: "018",
  contentId: "018-dr-mario"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
