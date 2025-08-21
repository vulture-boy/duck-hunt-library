import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Banjo & Kazooie" }
  ],
  matchupNumber: "073",
  contentId: "073-banjo-kazooie"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
