import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Fox" }
  ],
  matchupNumber: "007",
  contentId: "007-fox"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
