import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Wii Fit Trainer (Normal)", displayName: "Normal" },
    { name: "Wii Fit Trainer (Deep Breathing)", displayName: "Deep Breathing" }
  ],
  matchupNumber: "047",
  contentId: "047-wii-fit-trainer",
  pageDisplayName: "Wii Fit Trainer"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
