import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Min Min" }
  ],
  matchupNumber: "076",
  contentId: "076-min-min"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
