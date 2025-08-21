import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "peach", displayName: "Peach" },
    { name: "daisy", displayName: "Daisy" }
  ],
  matchupNumber: "013",
  contentId: "013-peach-daisy"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
