import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Peach" },
    { name: "Daisy" }
  ],
  matchupNumber: "013",
  contentId: "013-peach-daisy"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
