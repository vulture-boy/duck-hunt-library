import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "little-mac", displayName: "Little Mac" }
  ],
  matchupNumber: "049",
  contentId: "049-little-mac"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
