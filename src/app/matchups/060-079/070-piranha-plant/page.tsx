import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Piranha Plant" }
  ],
  matchupNumber: "070",
  contentId: "070-piranha-plant"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
