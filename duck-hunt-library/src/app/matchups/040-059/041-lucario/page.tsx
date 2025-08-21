import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Lucario (0%)", displayName: "0% Damage" },
    { name: "Lucario (65%)", displayName: "65% Damage" },
    { name: "Lucario (190%)", displayName: "190% Damage" }
  ],
  matchupNumber: "041",
  contentId: "041-lucario",
  pageDisplayName: "Lucario"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
