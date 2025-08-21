import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Incineroar" }
  ],
  matchupNumber: "069",
  contentId: "069-incineroar"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
