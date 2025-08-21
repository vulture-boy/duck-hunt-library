import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "mii-swordfighter", displayName: "Mii Swordfighter" }
  ],
  matchupNumber: "052",
  contentId: "052-mii-swordfighter"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
