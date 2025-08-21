import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Zelda" }
  ],
  matchupNumber: "017",
  contentId: "017-zelda"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
