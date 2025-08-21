import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Hero (Normal)", displayName: "Normal" },
    { name: "Hero (Psych Up)", displayName: "Psych Up" },
    { name: "Hero (Oomph)", displayName: "Oomph" },
    { name: "Hero (Acceleratle)", displayName: "Acceleratle" }
  ],
  matchupNumber: "072",
  contentId: "072-hero",
  pageDisplayName: "Hero"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
