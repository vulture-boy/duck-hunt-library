import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "kirby", displayName: "Kirby" }
  ],
  matchupNumber: "006",
  contentId: "006-kirby"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
