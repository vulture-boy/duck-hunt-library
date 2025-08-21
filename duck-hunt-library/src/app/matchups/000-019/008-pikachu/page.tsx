import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Pikachu" }
  ],
  matchupNumber: "008",
  contentId: "008-pikachu"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
