import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "wii-fit-trainer", variant: "normal", displayName: "Normal" },
    { name: "wii-fit-trainer", variant: "deep-breathing", displayName: "Deep Breathing" }
  ],
  matchupNumber: "047",
  contentId: "047-wii-fit-trainer",
  pageDisplayName: "Wii Fit Trainer"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
