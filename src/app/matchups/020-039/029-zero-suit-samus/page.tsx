import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "zero-suit-samus", displayName: "Zero Suit Samus" }
  ],
  matchupNumber: "029",
  contentId: "029-zero-suit-samus"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
