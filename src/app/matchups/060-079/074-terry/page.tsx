import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Terry" }
  ],
  matchupNumber: "074",
  contentId: "074-terry"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
