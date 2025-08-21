import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Mewtwo" }
  ],
  matchupNumber: "024",
  contentId: "024-mewtwo"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
