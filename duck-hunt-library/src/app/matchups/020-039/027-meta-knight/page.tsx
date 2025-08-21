import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "meta-knight", displayName: "Meta Knight" }
  ],
  matchupNumber: "027",
  contentId: "027-meta-knight"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
