import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Pichu" }
  ],
  matchupNumber: "019",
  contentId: "019-pichu"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
