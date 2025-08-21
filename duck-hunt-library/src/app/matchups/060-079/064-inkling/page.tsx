import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Inkling" }
  ],
  matchupNumber: "064",
  contentId: "064-inkling"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
