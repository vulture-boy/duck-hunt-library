import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Shulk (Normal)", displayName: "Normal" },
    { name: "Shulk (Jump)", displayName: "Jump (翔)" },
    { name: "Shulk (Speed)", displayName: "Speed (疾)" },
    { name: "Shulk (Shield)", displayName: "Shield (盾)" },
    { name: "Shulk (Buster)", displayName: "Buster (斬)" },
    { name: "Shulk (Smash)", displayName: "Smash (撃)" }
  ],
  matchupNumber: "057",
  contentId: "057-shulk",
  pageDisplayName: "Shulk"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
