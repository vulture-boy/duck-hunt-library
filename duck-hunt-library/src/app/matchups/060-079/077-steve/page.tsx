import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Steve (Unequipped)", displayName: "Unequipped" },
    { name: "Steve (Wood)", displayName: "Wood" },
    { name: "Steve (Stone)", displayName: "Stone" },
    { name: "Steve (Iron)", displayName: "Iron" },
    { name: "Steve (Gold)", displayName: "Gold" },
    { name: "Steve (Diamond)", displayName: "Diamond" }
  ],
  matchupNumber: "077",
  contentId: "077-steve",
  pageDisplayName: "Steve"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
