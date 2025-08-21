import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Pikmin & Olimar", displayName: "Red Pikmin" },
    { name: "Pikmin & Olimar", displayName: "Yellow Pikmin" },
    { name: "Pikmin & Olimar", displayName: "Blue Pikmin" },
    { name: "Pikmin & Olimar", displayName: "White Pikmin" },
    { name: "Pikmin & Olimar", displayName: "Purple Pikmin" }
  ],
  matchupNumber: "040",
  contentId: "040-olimar",
  pageDisplayName: "Olimar"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
