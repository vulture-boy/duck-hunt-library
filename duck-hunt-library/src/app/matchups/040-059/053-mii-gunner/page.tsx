import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "mii-gunner", displayName: "Mii Gunner" }
  ],
  matchupNumber: "053",
  contentId: "053-mii-gunner"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
