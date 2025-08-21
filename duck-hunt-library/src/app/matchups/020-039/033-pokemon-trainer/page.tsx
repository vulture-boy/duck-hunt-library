import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Pokemon Trainer (Squirtle)", displayName: "Squirtle" },
    { name: "Pokemon Trainer (Ivysaur)", displayName: "Ivysaur" },
    { name: "Pokemon Trainer (Charizard)", displayName: "Charizard" }
  ],
  matchupNumber: "033",
  contentId: "033-pokemon-trainer",
  pageDisplayName: "Pokemon Trainer"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
