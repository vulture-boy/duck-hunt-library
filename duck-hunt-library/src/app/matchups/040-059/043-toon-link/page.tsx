import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Toon Link" }
  ],
  matchupNumber: "043",
  contentId: "043-toon-link"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
