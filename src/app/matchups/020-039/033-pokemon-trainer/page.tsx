import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "squirtle", displayName: "Squirtle" },
    { name: "ivysaur", displayName: "Ivysaur" },
    { name: "charizard", displayName: "Charizard" }
  ],
  matchupNumber: "033",
  contentId: "033-pokemon-trainer",
  pageDisplayName: "Pokemon Trainer"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
