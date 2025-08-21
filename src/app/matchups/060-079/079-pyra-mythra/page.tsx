import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Pyra" },
    { name: "Mythra" }
  ],
  matchupNumber: "079",
  contentId: "079-pyra-mythra"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
