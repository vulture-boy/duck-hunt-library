import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Pit" },
    { name: "Dark Pit" }
  ],
  matchupNumber: "028",
  contentId: "028-pit"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
