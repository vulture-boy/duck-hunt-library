import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Pac-Man" }
  ],
  matchupNumber: "055",
  contentId: "055-pac-man"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
