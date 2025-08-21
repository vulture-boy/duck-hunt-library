import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Yoshi" }
  ],
  matchupNumber: "005",
  contentId: "005-yoshi"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
