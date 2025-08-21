import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Ridley" }
  ],
  matchupNumber: "065",
  contentId: "065-ridley"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
