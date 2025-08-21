import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "young-link", displayName: "Young Link" }
  ],
  matchupNumber: "022",
  contentId: "022-young-link"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
