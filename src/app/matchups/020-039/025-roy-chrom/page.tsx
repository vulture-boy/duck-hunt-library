import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "roy", displayName: "Roy" },
    { name: "chrom", displayName: "Chrom" }
  ],
  matchupNumber: "025",
  contentId: "025-roy-chrom"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
