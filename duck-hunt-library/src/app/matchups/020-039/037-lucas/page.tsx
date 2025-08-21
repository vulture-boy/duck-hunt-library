import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Lucas" }
  ],
  matchupNumber: "037",
  contentId: "037-lucas"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
