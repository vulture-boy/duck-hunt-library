import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Byleth" }
  ],
  matchupNumber: "075",
  contentId: "075-byleth"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
