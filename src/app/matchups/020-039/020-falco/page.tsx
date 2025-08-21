import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Falco" }
  ],
  matchupNumber: "020",
  contentId: "020-falco"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
