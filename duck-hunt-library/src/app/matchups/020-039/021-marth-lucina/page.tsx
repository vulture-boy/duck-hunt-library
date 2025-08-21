import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "marth", displayName: "Marth" },
    { name: "lucina", displayName: "Lucina" }
  ],
  matchupNumber: "021",
  contentId: "021-marth-lucina"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
