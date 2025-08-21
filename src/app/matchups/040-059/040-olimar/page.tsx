import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "olimar", variant: "red", displayName: "Red Pikmin" },
    { name: "olimar", variant: "yellow", displayName: "Yellow Pikmin" },
    { name: "olimar", variant: "blue", displayName: "Blue Pikmin" },
    { name: "olimar", variant: "white", displayName: "White Pikmin" },
    { name: "olimar", variant: "purple", displayName: "Purple Pikmin" }
  ],
  matchupNumber: "040",
  contentId: "040-olimar",
  pageDisplayName: "Olimar"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
