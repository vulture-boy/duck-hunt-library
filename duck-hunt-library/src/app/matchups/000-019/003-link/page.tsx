import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "link", displayName: "Link" }
  ],
  matchupNumber: "003",
  contentId: "003-link"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
