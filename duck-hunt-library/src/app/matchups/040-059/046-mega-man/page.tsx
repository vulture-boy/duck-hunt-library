import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Mega Man" }
  ],
  matchupNumber: "046",
  contentId: "046-mega-man"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
