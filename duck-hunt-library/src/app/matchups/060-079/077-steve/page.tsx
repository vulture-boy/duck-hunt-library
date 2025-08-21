import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "steve", variant: "unequipped", displayName: "Unequipped" },
    { name: "steve", variant: "wood", displayName: "Wood" },
    { name: "steve", variant: "stone", displayName: "Stone" },
    { name: "steve", variant: "iron", displayName: "Iron" },
    { name: "steve", variant: "gold", displayName: "Gold" },
    { name: "steve", variant: "diamond", displayName: "Diamond" }
  ],
  matchupNumber: "077",
  contentId: "077-steve",
  pageDisplayName: "Steve"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
