import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Ness" }
  ],
  matchupNumber: "010",
  contentId: "010-ness"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
