import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Samus", displayName: "Samus" },
    { name: "Dark Samus", displayName: "Dark Samus" }
  ],
  matchupNumber: "004",
  contentId: "004-samus"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
