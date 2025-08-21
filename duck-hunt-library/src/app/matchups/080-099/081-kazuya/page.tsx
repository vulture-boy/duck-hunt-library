import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Kazuya" }
  ],
  matchupNumber: "081",
  contentId: "081-kazuya"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
