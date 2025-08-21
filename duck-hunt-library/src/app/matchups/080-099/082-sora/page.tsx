import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Sora" }
  ],
  matchupNumber: "082",
  contentId: "082-sora"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
