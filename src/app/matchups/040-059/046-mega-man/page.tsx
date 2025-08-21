import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "mega-man", displayName: "Mega Man" }
  ],
  matchupNumber: "046",
  contentId: "046-mega-man"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
