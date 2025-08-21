import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "pit", displayName: "Pit" },
    { name: "dark-pit", displayName: "Dark Pit" }
  ],
  matchupNumber: "028",
  contentId: "028-pit"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
