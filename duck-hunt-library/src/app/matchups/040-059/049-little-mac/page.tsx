import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Little Mac" }
  ],
  matchupNumber: "049",
  contentId: "049-little-mac"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
