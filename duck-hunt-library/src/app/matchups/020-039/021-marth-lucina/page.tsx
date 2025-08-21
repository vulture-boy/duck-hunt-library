import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Marth" },
    { name: "Lucina" }
  ],
  matchupNumber: "021",
  contentId: "021-marth-lucina"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
