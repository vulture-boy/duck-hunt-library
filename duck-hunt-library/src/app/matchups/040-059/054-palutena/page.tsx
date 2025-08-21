import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "palutena", displayName: "Palutena" }
  ],
  matchupNumber: "054",
  contentId: "054-palutena"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
