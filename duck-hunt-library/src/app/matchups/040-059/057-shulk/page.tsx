import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "shulk", variant: "normal", displayName: "Normal" },
    { name: "shulk", variant: "jump", displayName: "Jump (翔)" },
    { name: "shulk", variant: "speed", displayName: "Speed (疾)" },
    { name: "shulk", variant: "shield", displayName: "Shield (盾)" },
    { name: "shulk", variant: "buster", displayName: "Buster (斬)" },
    { name: "shulk", variant: "smash", displayName: "Smash (撃)" }
  ],
  matchupNumber: "057",
  contentId: "057-shulk",
  pageDisplayName: "Shulk"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
