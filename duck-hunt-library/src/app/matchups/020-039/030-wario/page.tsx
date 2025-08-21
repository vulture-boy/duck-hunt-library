import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "wario", displayName: "Wario" }
  ],
  matchupNumber: "030",
  contentId: "030-wario"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
