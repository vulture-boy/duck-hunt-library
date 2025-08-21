import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Isabelle" }
  ],
  matchupNumber: "068",
  contentId: "068-isabelle"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
