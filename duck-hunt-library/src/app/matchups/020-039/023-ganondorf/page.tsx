import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Ganondorf" }
  ],
  matchupNumber: "023",
  contentId: "023-ganondorf"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
