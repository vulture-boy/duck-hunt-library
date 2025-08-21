import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Wario" }
  ],
  matchupNumber: "030",
  contentId: "030-wario"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
