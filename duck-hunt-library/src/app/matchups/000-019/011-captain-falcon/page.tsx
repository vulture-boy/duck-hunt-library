import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Captain Falcon" }
  ],
  matchupNumber: "011",
  contentId: "011-captain-falcon"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
